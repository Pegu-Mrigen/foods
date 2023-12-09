"use client";
import React, { useContext, useEffect, useState } from "react";
import SectionHeaders from "./../../components/layout/SectionHeaders";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import Image from "next/image";
import Trash from "@/components/icons/Trash";
import AddressInputs from "@/components/layout/AddressInputs";
import { useProfile } from "@/components/UseProfile";

const CartPage = () => {
  const { cartProducts, removeCartProduct } = useContext(CartContext);
  const [address, setAddress] = useState({});
  
  const { userData: profileData } = useProfile();
  useEffect(() => {
    if (profileData?.city) {
      const { phone, streetAddress, city, country, postalCode } = profileData;
      
      const addressFromProfile = {
        phone,
        streetAddress,
        city,
        country,
        postalCode,
      };
      setAddress(addressFromProfile);
    }
  }, [profileData]);
  
  
  console.log(profileData);
  


  let total = 0;
  for (const p of cartProducts) {
    total += cartProductPrice(p);
  }

  console.log(cartProducts);

  // function handleAddressChange(propName, value) {
  //   setAddress((prevAddress) => {
  //     return { ...prevAddress, [propName]: value };
  //   });
  // }
  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="grid gap-8 grid-cols-2 mt-8">
        <div>
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center  gap-4 mb-2 border-b py-2"
              >
                <div className="w-24">
                  <Image src={product.image} alt="" width={240} height={240} />
                </div>
                <div className="grow">
                  <h3 className="font-semibold">{product.name}</h3>
                  {product?.sizes && (
                    <div className="text-sm">
                      Size: <span>{product?.sizes?.name}</span>
                    </div>
                  )}
                  {product?.extras?.length > 0 && (
                    <div className="text-sm text-gray-500">
                      {product.extras.map((extra) => (
                        <div key={extra}>
                          {extra?.name} Rs/- {extra.price}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-lg font-semibold">
                  Rs/- {cartProductPrice(product)}
                </div>
                <div className="ml-2">
                  <button
                    type="button"
                    onClick={() => removeCartProduct(index)}
                    className="p-2"
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          <div className="py-2 text-right pr-16">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-lg font-semibold pl-2">Rs/- {total}</span>
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg">
          <h2>Checkout</h2>
          <form>
            <AddressInputs
              addressProps={address}
              setAddressProps={ handleAddressChange }
            />
            <button>Pay Rs/- {total}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
