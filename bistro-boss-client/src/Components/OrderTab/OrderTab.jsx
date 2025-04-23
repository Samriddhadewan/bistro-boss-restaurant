import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <FoodCard item={item} key={item._id}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderTab;
