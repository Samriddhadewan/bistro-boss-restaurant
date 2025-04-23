import React from 'react'

const FoodCard = ({item}) => {
    const {name, recipe, image,  price} = item || {};
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-center">
    <p className='bg-gray-800 absolute top-3 right-9 px-4 py-1  text-white'>{price}</p>
    <h2 className="text-2xl font-semibold">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn text-[#BB8506] border-0 border-b-4 rounded-lg px-9 py-5 border-[#BB8506] bg-[#E8E8E8]">Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default FoodCard