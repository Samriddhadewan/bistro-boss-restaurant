import React from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const [,refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price, _id } = item || {};
  const { user } = useAuth();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged in",
        text: "Please Login first to add to the Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        navigate("/login", { state: { from: location } });
      });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <p className="bg-gray-800 absolute top-3 right-9 px-4 py-1  text-white">
          {price}
        </p>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn text-[#BB8506] border-0 border-b-4 rounded-lg px-9 py-5 border-[#BB8506] bg-[#E8E8E8]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
