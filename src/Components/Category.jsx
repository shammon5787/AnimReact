import React from 'react'

const Category = () => {
    return (
        <div className='p-4'>
            <h2 className='font-bold text-slate-800'>FIND THE BES FOOD</h2>
            <div className='gap-6 flex overflow-x-scroll lg:overflow-x-hidden'>
                <button className='bg-blue-900 px-4 py-1 items-center justify-center rounded-md text-yellow-100 font-bold'>All</button>
                <button className='bg-blue-900 px-4 py-1 items-center justify-center rounded-md text-yellow-100 font-bold'>Dinner</button>
                <button className='bg-blue-900 px-4 py-1 items-center justify-center rounded-md text-yellow-100 font-bold'>Lunch</button>
                <button className='bg-blue-900 px-4 py-1 items-center justify-center rounded-md text-yellow-100 font-bold'>Breakfast</button>
                <button className='bg-blue-900 px-4 py-1 items-center justify-center rounded-md text-yellow-100 font-bold'>Special</button>
            </div>
        </div>
    )
}

export default Category