import React from 'react'
import Foodcard from './Foodcard'
import FoodData from '../Data/FoodData.jsx'
import { useSelector } from 'react-redux'


const FoodItem = () => {

  const category = useSelector((state) => state.category.category)

  const search = useSelector((state)=>state.search.search)


  return (
    <div className='flex flex-wrap items-center justify-center lg:justify-between lg:items-start gap-4'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase())
          } else {
            return category === food.category
          }
        }).map((food) => (
          <Foodcard key={food.id}
            id={food.id}
            name={food.name}
            image={food.image}
            rating={food.ratting}
            desc={food.desc}
            price={food.price} />
        ))
      }
      {/* FoodData.map((food)=>{
          return  
        }) */}
    </div>
  )
}

export default FoodItem