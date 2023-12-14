"use client"
import React, { useEffect, useState } from 'react'
import MenuItemsPage from './../menu-items/page';
import SectionHeaders from '@/components/layout/SectionHeaders';
import MenuItem from '@/components/menu/MenuItem';

const MenuPage = () => {

    const [categories, setCategories]=useState([])
    const [menuItems, setMenuItems] = useState([])

    useEffect(()=>{
        fetch("/api/categories").then(res=>{res.json().then(categories=>setCategories(categories))})
        fetch("/api/menu-items").then(res=>{res.json().then(menuItems=>setMenuItems(menuItems))})

    }, [])

    console.log(categories, menuItems)
  return (
    <section className='mt-8'>
        {categories?.length>0 && categories.map(c=>(
            <div key={c._id}>
                <div className='text-center'>
                <SectionHeaders mainHeader={c.name} />
                </div>
                <div className='grid sm:grid-cols-3 gap-4 mt-6 mb-12'>
                {menuItems.length>0 && 
                menuItems.filter(item=>item.category===c._id).map(item=>(
                    <div key={item._id}>
                        <MenuItem  {...item}/>
                    </div>
                ))
                }
                </div>
            </div>
        ))}
    </section>
  )
}

export default MenuPage


