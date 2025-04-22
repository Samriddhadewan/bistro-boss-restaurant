import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover/Cover';
import coverImg from "../../assets/menu/banner3.jpg"
import PopularMenu from '../../Components/PopularMenu/PopulerMenu';

const Menu = () => {
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
        <Cover img={coverImg} des="Would you like to try a dish?" title="OUR MENU"></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={coverImg} des="Would you like to try a dish?" title="OUR MENU"></Cover>
        <PopularMenu></PopularMenu>
        <Cover img={coverImg} des="Would you like to try a dish?" title="OUR MENU"></Cover>
        <PopularMenu></PopularMenu>
    </div>
  )
}

export default Menu