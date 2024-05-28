import React, { useState } from 'react'
// import { FaRegArrowAltCircleRight  } from "react-icons/fa";
// import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0)
  return (
    <div className='slider' >
        {/* <FaRegArrowAltCircleRight className ='arrow prev' />
        <FaRegArrowAltCircleLeft className = 'arrow next' /> */}
    </div>
  )
}

export default Slider