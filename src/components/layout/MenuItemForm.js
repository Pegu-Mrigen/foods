"use client"
import React, { useState } from 'react'
import Trash from '../icons/Trash';
import Plus from '../icons/Plus';
import MenuItemProps from './MenuItemProps';

const MenuItemForm = ({onSubmit, menuItem}) => {
    const [image, setImage] = useState(menuItem?.image || "");
    const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [sizes, setSizes] = useState([]);
  const [extraIngredientPrice, setExtraIngredientPrice] = useState([]);


  const addSize=()=>{

    setSizes(oldSizes=>{
      return [...oldSizes, {name:"", price:""}]
    })


  }
  const editSize=(e, index, prop)=>{  


    setSizes(prevSizes=>{
      const newSizes=[...prevSizes]

      newSizes[index][prop]= e.target.value
      return newSizes
    })
    

  }

  const removeSize=(index)=>{
    setSizes(prev=>prev.filter((v,i)=>i !==index))
  }
  
  return (
    <form className="  mt-8 max-w-xl mx-auto  " 
    
    
    // onSubmit={onSubmit}
    onSubmit={e=>onSubmit(e, {image, name, description, basePrice,extraIngredientPrice, sizes, })}
    
    
    >
    <div className="grid items-start     p-2  gap-4  ">
      <div className="grow ">
        <label>Menu item name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label> Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Base price</label>
        <input
          type="text"
          value={basePrice}
          onChange={(e) => setBasePrice(e.target.value)}
        />

        {/* <div className='bg-gray-200 p-2 rounded-md mb-2 w-[500px]'>
          <label>Sizes</label>
          {sizes?.length>0 && sizes.map((size, index)=>(
            <div className='flex gap-2 ' key={index}>
              <div><label>Size name</label><input type="text" placeholder='Size name' value={size.name} onChange={e=>editSize(e, index, "name")} /></div>
              <div><label>Extra price</label><input type="text" placeholder='Extra price' value={size.price}  onChange={e=>editSize(e, index, "price")} /></div>

              <div>
                <button type='button' onClick={()=>removeSize(index)} className='bg-white mb-2 px-2 mt-6'>
                  <Trash />
                </button>
              </div>
            </div>

          ))}
          <button type='button' onClick={addSize} className='bg-white'>
            <Plus />
            <span>Add item size</span>
          </button>
        </div> */}

        <MenuItemProps name={"Sizes"} props={sizes} addLabel={"Add item size"} setProps={setSizes} />
        <MenuItemProps name={"Extra ingredients"} props={extraIngredientPrice} addLabel={"Add ingredient price"} setProps={setExtraIngredientPrice} />

        <button type="submit">Save</button>
      </div>
    </div>
  </form>


  )
}

export default MenuItemForm