import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-900 text-cyan-200 p-7 items-center justify-center'>
                <div className='flex items-center justify-between px-4'>
                    <span>PAK</span>
                    <div>
                        <ul className='flex items-center justify-between gap-36'>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Explorer</li>
                            <li className='cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='text-blue-950 mt-4 mb-4 pt-0 bg-slate-900' />
            <div className='flex flex-col lg:flex-row g:items-center justify-between p-5'>
                <div>
                    <h3 className='text-gray-600 font-bold'>{new Date().toUTCString().slice(0, 16)}</h3>
                    <h3 className='text-gray-600 font-bold'>SERVICES FOR YOU BENEFITS</h3>
                </div>
                <div>
                    <input type="search" name='search' placeholder='search food here' autoComplete='off' id='' className='p-2 border rounded-lg outline-none w-full'/>
                </div>
            </div>
        </>
    )
}

export default Navbar