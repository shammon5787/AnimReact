import React from 'react'
import Team from '../Components/Team'
import Category from '../Components/Category'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='m-[30px]'>
      <Category />
      <FoodItem />
      <Card />
      <Team />
    </div>
  )
}

export default Home