import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Category from "../Category/Category";
import ItemCards from "../ItemCards/ItemCards";

const PopularMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setItems(popularItems);
      });
    console.log(items.length);
  }, []);

  return (
    <div className="mb-20">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mt-12">
        {
          items.map(item=> <ItemCards item={item} key={item._id}></ItemCards>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;
