import React from 'react'
import SectionHeaders from './../../components/layout/SectionHeaders';

const CartPage = () => {
  return (
    <section className='mt-8'>
       <div className="text-center">
       <SectionHeaders mainHeader="Cart" />
       </div>
        <div className="grid gap-4 grid-cols-2 mt-4">
            <div>prod</div>
            <div>rt</div>
        </div>
    </section>
  )
}

export default CartPage