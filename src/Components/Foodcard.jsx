import React from 'react'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { add } from '../Store/cardSlice';

const Foodcard = ({id, name, image, rating, desc,  price}) => {

  const dispetch = useDispatch();

  return (
    <div className='font-bold w-[230px] bg-slate-100 flex flex-col items-center p-5 rounded-lg'>
      <div>
      </div>
      <img className='w-[100px] h-[100px] rounded-full hover:scale-110 transition-all duration-500 cursor-grab object-cover opacity-1 animate-pulse' src={image} alt="" />
      <div className='flex items-center justify-between gap-20'>
        <h2>{name}</h2>
        <span>$ {price}</span>
      </div>
      <p>{desc}</p>
      <div className='flex items-center justify-center gap-8'>
        <span className='flex items-center justify-between gap-2'>
          <IoStar className='text-yellow-500' /> {rating}
        </span>
        <button onClick={()=>dispetch(add({id, name, image, price, rating, qty: 1}))} className='bg-indigo-900 px-2 py-1 rounded-md text-yellow-50'>Add To Card</button>
      </div>
    </div>
  )
}

export default Foodcard