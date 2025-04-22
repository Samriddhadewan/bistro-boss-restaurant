import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'
import PopularMenu from '../../Components/PopularMenu/PopulerMenu'
import CheckItOut from '../../Components/CheckItOut/CheckItOut'
import Testimonial from '../../Components/Testimonial/Testimonial'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
            <Helmet>
              <title>Bistro Boss | Home</title>
            </Helmet>
        
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <CheckItOut></CheckItOut>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home