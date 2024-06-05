import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {


    const [categories, setcategories] = useState([])
    const listUniquecat = () => {
        const uniquecat = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniquecat)
        console.log(uniquecat)
    }

    useEffect(() => {
        //   console.log(categories)
        listUniquecat()
    }, [])

    const dispatch = useDispatch()

    const selectedCategory = useSelector((state) => state.category.category)

    return (
        <div className='p-4'>
            <h2 className='font-bold text-slate-800'>FIND THE BES FOOD</h2>
            <div className=' my-5 flex overflow-x-scroll lg:overflow-x-hidden'>
                <button onClick={() => dispatch(setCategory("All"))} className='px-3 mx-4 py-2 gap-6 bg-blue-900  items-center justify-center rounded-md text-yellow-100 font-bold'>
                    {/* {category} */}
                    All
                </button>
                {
                    categories.map((category, index) => {
                        return (
                            <div className='gap-6'>
                                <button onClick={() => dispatch(setCategory(category))} key={index} className='px-3 mx-4 py-2 gap-6 bg-blue-900  items-center justify-center rounded-md text-yellow-100 font-bold'>
                                    {category}
                                    {/* All */}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu