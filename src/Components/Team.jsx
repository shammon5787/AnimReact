import React, { useState } from 'react'
import Data from '../Data/Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
    const [product, setproduct] = useState(Data)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
        <h1 className=' mt-36 text-white font-bold text-5xl items-center justify-center flex'>TEAM</h1>
        <div className='w-[70vw] m-auto mt-4'>
            <Slider {...settings}>
                {
                    product.map((prod) => (
                        <div key={prod.id} className='flex flex-col items-center justify-center bg-blue-800 rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img className='w-[100px] h-[100px] rounded-full object-cover p-2' src={prod.image} alt="no image" />
                            </div>
                            <div className='bg-indigo-100  h-[80px] rounded-b-xl items-center justify-center flex flex-col'>
                                <p>{prod.name}</p>
                                <p>{prod.review}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
        </>
    )
}

export default Team