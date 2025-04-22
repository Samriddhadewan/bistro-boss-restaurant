import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../../Components/PopularMenu/PopulerMenu";
import useMenu from "../../Components/Hooks/useMenu/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import desertBgImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBgImg from "../../assets/menu/pizza-bg.jpg"
import saladBgImg from "../../assets/menu/salad-bg.jpg"
import soupBgImg from "../../assets/menu/soup-bg.jpg"
// Removed the incomplete import statement



const Menu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const deserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      // <Helmet>
      //   <title>Bistro Boss | Menu</title>
      // </Helmet>
      <Cover img={coverImg} title="OUR MENU" des="Would you like to try a dish?"></Cover>
      {/* offers section here  */}
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
      <MenuCategory categories={offers}></MenuCategory>
      {/* desert section here  */}
      <MenuCategory categories={deserts} bgImage={desertBgImg} title={'deserts'} des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
      {/* pizza section  */}
      <MenuCategory categories={pizzas} bgImage={pizzaBgImg} title="pizzas" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
      {/* salads category  */}
      <MenuCategory categories={salads} bgImage={saladBgImg} title="salads" des={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
      {/* soup category  */}
      <MenuCategory categories={soups} bgImage={soupBgImg} title="soups" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ></MenuCategory>


    </div>
  );
};


export default Menu;
