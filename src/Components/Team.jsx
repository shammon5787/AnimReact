import React, { useState } from 'react'
import img from '../assets/m1.jpg'
import Data from '../Data/Data'

const Team = () => {
    const [product, setproduct] = useState(Data)
    return (
        <div className='flex flex-row  m-auto  mt-[200px] gap-6 overflow-x-scroll'>
            {
                product.map((prod) => (
                    <div key={prod.id} className='flex flex-col items-center justify-center bg-blue-800 rounded-xl w-[20vw]'>
                        <div>
                            <img className='w-[100px] h-[100px] rounded-full object-cover p-2' src={prod.image} alt="no image" />
                        </div>
                        <div className='bg-indigo-100 w-[20vw] h-[80px] rounded-b-xl items-center justify-center flex flex-col'>
                            <p>{prod.name}</p>
                            <p>{prod.review}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Team