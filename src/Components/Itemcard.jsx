import React from 'react'
import img from '../assets/1.avif'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Itemcard = () => {
    return (
        <div className='flex items-center gap-4 shadow-md rounded-lg p-2'>
        <MdDelete className='absolute right-7 cursor-pointer mb-6' />
            <img className='rounded-full w-[60px] h-[60px]' src={img} alt="" />
            <div className='leading-5'>
                <h2>Onion Pizza</h2>
                <div className='flex justify-between items-center'>
                    <span>$: 23</span>
                    <div className='flex items-center fixed right-7'>
                        <FaPlus className='font-semibold text-lg border rounded-lg border-r-2 cursor-pointer hover:scale-50 transition-all duration-500' />
                        <span>1</span>
                        <FaMinus className='font-semibold text-lg border rounded-lg border-r-2 cursor-pointer hover:scale-50 transition-all duration-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itemcard