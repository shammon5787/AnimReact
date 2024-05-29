import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sliderData from './Slider_slide';

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0)
  return (
    <div className='slider' >
      <FaArrowLeft className='text-yellow-50 border rounded-full m-3 cursor-pointer' />
      <FaArrowRight className='text-yellow-50 border rounded-full m-3 cursor-pointer' />
      {
        sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {
                index === currentSlide && (
                  <div>
                    <img src={slide.image} alt="" />
                    <div className="content">
                      <p>{slide.heading}</p>
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Slider