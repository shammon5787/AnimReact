import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Card = () => {

  const cartitem = useSelector((state) => state.cart.cart);
  const [activeCart, setactiveCart] = useState()
  const totalqty = cartitem.reduce((totalqty, item)=> totalqty + item.qty, 0)
  const totalPrice = cartitem.reduce((totalPrice , item)=>totalPrice + item.qty * item.price, 0)

  const navigate = useNavigate()

  return (
    <>
      <div className={`bg-white top-0 fixed right-0 w-full lg:w-[300px] h-full p-5'>
        <div className='flex items-center ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div>
          <h1 className='font-bold'>Your Orders</h1>
          <ImCross onClick={() => setactiveCart(!activeCart)} className='right-7 top-1 absolute cursor-pointer hover:text-green-600 animate-bounce' />
        </div>
        {
          cartitem.length > 0 ? cartitem.map((food)=>(
            <Itemcard  key={food.id}
            id = {food.id} 
            name = {food.name} 
            price = {food.price} 
            image = {food.image}
            qty = {food.qty}
            />
          )) : <h2 className='text-green-600 items-center font-bold justify-center flex mt-20 bg'>Your Cart Is Empty</h2>
        }

        <div className='absolute bottom-0'>
          <h1 className='text-lg font-semibold'>Items: {totalqty} </h1>
          <h2 className='text-lg font-semibold'>Total Amound: {totalPrice} </h2>
          <hr />
          <button onClick={()=>navigate("/success")} className='mb-5 bg-cyan-900 py-2 rounded-md lg:w-[19vw] font-bold text-lg text-yellow-50 w-[90vw]'>Check Out</button>
        </div>
      </div>
      <MdShoppingCart onClick={()=>setactiveCart(!activeCart)} className={`fixed bottom-9  right-2 cursor-pointer text-4xl ${ totalqty > 0 && "animate-bounce delay-100 transition-all duration-1000"}`}/>
    </>
  )
}

export default Card