import React from 'react'
import { ImCross } from "react-icons/im";
import Itemcard from './Itemcard';

const Card = () => {
  return (
    <>
      <div className='bg-white top-0 fixed right-0 w-full lg:w-[300px] h-full p-5'>
        <div className='flex items-center'>
          <h1 className='font-bold'>Your Orders</h1>
          <ImCross className='right-7 absolute cursor-pointer hover:text-green-600' />
        </div>

        <Itemcard />
        <Itemcard />
        <Itemcard />

        <div className='absolute bottom-0'>
          <h1 className='text-lg font-semibold'>Items: </h1>
          <h2 className='text-lg font-semibold'>Total Amound: </h2>
          <hr />
          <button className='mb-5 bg-cyan-900 py-2 rounded-md lg:w-[19vw] font-bold text-lg text-yellow-50 w-[90vw]'>Check Out</button>
        </div>
      </div>
    </>
  )
}

export default Card