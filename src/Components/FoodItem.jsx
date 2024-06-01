import React from 'react'
import Foodcard from './Foodcard'
import FoodData from '../Data/FoodData'


const FoodItem = () => {
  return (
    <div className='flex flex-wrap items-center justify-center lg:justify-between lg:items-start gap-4'> 
      {
        FoodData.map((mydata)=>{
          return  <Foodcard key={mydata.id} name = {mydata.name} image = {mydata.image} rating = {mydata.ratting} desc = {mydata.desc} price = {mydata.price} />
        })
      }
    </div>
  )
}

export default FoodItem