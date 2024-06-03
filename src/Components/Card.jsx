import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";

const Card = () => {

  const cartitem = useSelector((state) => state.cart.cart);
  const [activeCart, setactiveCart] = useState()

  return (
    <>
      <div className={`bg-white top-0 fixed right-0 w-full lg:w-[300px] h-full p-5'>
        <div className='flex items-center ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div>
          <h1 className='font-bold'>Your Orders</h1>
          <ImCross onClick={() => setactiveCart(!activeCart)} className='right-7 top-1 absolute cursor-pointer hover:text-green-600' />
        </div>
        {
          cartitem.length > 0 ? cartitem.map((itemList)=>(
            <Itemcard  key={itemList.id}
            id = {itemList.id} 
            name = {itemList.name} 
            price = {itemList.price} 
            image = {itemList.image}
            qty = {itemList.qty}
            />
          )) : <h2 className='text-green-600 items-center font-bold justify-center flex mt-20 bg'>Your Cart Is Empty</h2>
        }

        <div className='absolute bottom-0'>
          <h1 className='text-lg font-semibold'>Items: </h1>
          <h2 className='text-lg font-semibold'>Total Amound: {cartitem.length} </h2>
          <hr />
          <button className='mb-5 bg-cyan-900 py-2 rounded-md lg:w-[19vw] font-bold text-lg text-yellow-50 w-[90vw]'>Check Out</button>
        </div>
      </div>
      <MdShoppingCart onClick={()=>setactiveCart(!activeCart)} className='fixed bottom-9  right-2 cursor-pointer text-4xl'/>
    </>
  )
}

export default Card