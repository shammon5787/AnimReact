import React from 'react'

const Navbar = () => {
    return (
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
    )
}

export default Navbar