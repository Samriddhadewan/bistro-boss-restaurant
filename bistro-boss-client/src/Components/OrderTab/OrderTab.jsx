import React from 'react'
import FoodCard from '../FoodCard/FoodCard'

const OrderTab = ({items}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
      {
      items.map(item=> <FoodCard item={item} key={item._id}></FoodCard>)
    }
    </div>
  )
}

export default OrderTab