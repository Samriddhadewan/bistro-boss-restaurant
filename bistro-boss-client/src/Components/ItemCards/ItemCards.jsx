import React from 'react'

const ItemCards = ({item}) => {
    const {name, recipe, image,  price} = item || {};
  return (
    <div className='flex gap-5' >
        <img style={{borderRadius : "0px 200px 200px 200px"}} className='w-[120px]' src={image} alt="" />
        <div>
            <p className='text-[#151515] text-xl text-normal'>{name} ------------------</p>
            <p className='text-[#737373] font-normal text-base'>{recipe}</p>
        </div>
        <p className='text-xl font-normal text-[#BB8506] '>{price}</p>
    </div>
  )
}

export default ItemCards