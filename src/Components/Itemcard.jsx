import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQty, inrementQty, remove } from '../Store/cardSlice';

const Itemcard = ({id, name, price, image, qty}) => {

    const dispatch = useDispatch();

    return (
        <div className='flex items-center gap-4 shadow-md rounded-lg p-2'>
        <MdDelete onClick={()=> dispatch(remove({id, name, price, image, qty}))} className='absolute right-7 cursor-pointer mb-6' />
            <img className='rounded-full w-[60px] h-[60px] ' src={image} alt="" />
            <div className='leading-5'>
                <h2>{name}</h2>
                <div className='flex justify-between items-center'>
                    <span>$: {price}</span>
                    <div className='flex items-center fixed right-7 gap-2'>
                        <FaPlus onClick={()=> dispatch(inrementQty({id}))} className='font-semibold text-lg border rounded-lg border-r-2 cursor-pointer hover:scale-50 transition-all duration-500' />
                        <span>{qty}</span>
                        <FaMinus onClick={()=>  qty > 1 ? dispatch(decrementQty({id}))  : (qty = 0)} className='font-semibold text-lg border rounded-lg border-r-2 cursor-pointer hover:scale-50 transition-all duration-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itemcard