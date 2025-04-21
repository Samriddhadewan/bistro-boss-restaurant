import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'
import PopularMenu from '../../Components/PopularMenu/PopulerMenu'
import CheckItOut from '../../Components/CheckItOut/CheckItOut'
import Testimonial from '../../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
        
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CheckItOut></CheckItOut>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home