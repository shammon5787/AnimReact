import React, { useState } from 'react'
import img from '../assets/m1.jpg'
import Data from '../Data/Data'

const Team = () => {
    const [product, setproduct] = useState(Data)
    return (
        <div className='w-[50vw] m-auto bg-blue-800 rounded-xl mt-[200px] gap-16'>
            {
                product.map((prod) => (
                    <div key={prod.id} className='flex flex-col items-center justify-center'>
                        <div>
                            <img className='w-[140px] h-[140px] rounded-full' src={prod.image} alt="no image" />
                        </div>
                        <div className='bg-indigo-100 w-[50vw] h-[80px] rounded-b-xl items-center justify-center flex flex-col'>
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