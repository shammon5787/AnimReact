import React from 'react'
import Team from '../Components/Team'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'
import CategoryMenu from '../Components/CategoryMenu.jsx'

const Home = () => {
  return (
    <div className='m-[30px]'>
      <CategoryMenu />
      <FoodItem />
      <Card />
      <Team />
    </div>
  )
}

export default Home