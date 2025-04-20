import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

// imported images
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
        ></SectionTitle>


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24 max-w-6xl"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h1 className="text-4xl uppercase text-center text-white  -mt-18">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h1 className="text-4xl uppercase text-center text-white -mt-18">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h1 className="text-4xl uppercase text-center text-white -mt-18">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h1 className="text-4xl uppercase text-center text-white -mt-18">
            Deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h1 className="text-4xl uppercase text-center text-white -mt-18">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
