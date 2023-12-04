import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <section>
      <div className="relative left-0 right-0 justify-start   ">
        <div className="h-48 w-48 absolute -left-64 rotate-180  -z-10 overflow-x-hidden  ">
          <Image src={"/leafs.png"} alt="" layout="fill" objectFit="contain " />
        </div>
        <div className="h-48  -top-12 -z-10 overflow-x-hidden ">
          <Image
            src={"/leafs.png"}
            alt=""
            width={200}
            height={200}
            objectFit="contain"
            className="absolute -right-48    "
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader="Checkout" mainHeader="Menu" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default HomeMenu;
