import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import image from "../../assets/home/featured.jpg";
import "./CheckItOuT.css"
const CheckItOut = () => {
  return (
    <div className="check-it-out  text-white py-24 my-10">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        textColor={"white"}
      ></SectionTitle>
      <div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <img className="w-80" src={image} alt="" />
          <div className="">
            <h1 className="mb-5">March 20, 2023</h1>
            <p>
              March 20, 2023 WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error <br /> voluptate facere, deserunt
              dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae
              ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className="btn mt-5 uppercase">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckItOut;
