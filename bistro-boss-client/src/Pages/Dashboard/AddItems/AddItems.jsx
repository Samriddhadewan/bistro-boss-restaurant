import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    const imageFile = {image : data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'content-type': "multipart/form-data"
        }   
    })
    if(res.data.success){
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post("/menu", menuItem);
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                title: "Product added successfully!",
                icon: "success",
                draggable: true
              });
        }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"what's New"}
      ></SectionTitle>
      <div className="px-19">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* name  */}
          <label className="label text-black font-semibold">
            Recipe Name*
          </label>{" "}
          <br />
          <input
            {...register("name", { required: "recipe name is required" })}
            type="text"
            className="input w-full mt-2"
            placeholder="Recipe Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex-1 w-full ">
              {/* category  */}
              <label className="label text-black  font-semibold">
                Category*
              </label>{" "}
              <br />
              <select
                {...register("category", {
                  required: "category name is required",
                })}
                className="select border w-full mt-2 "
                defaultValue=""
              >
                <option disabled value="">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>
            <div className="flex-1">
              {/* price  */}
              <label className="label text-black font-semibold">
                Price*
              </label>{" "}
              <br />
              <input
                {...register("price", { required: "price name is required" })}
                type="number"
                className="input w-full mt-2"
                placeholder="Recipe Name"
              />
              {errors.price && <p>{errors.price.message}</p>}
            </div>
          </div>
          <div className="mt-2">
            <label className="label text-black font-semibold">
              Recipe Details*
            </label>{" "}
            <br />
            <textarea
              {...register("recipe", { required: "category name is required" })}
              className="textarea mt-2 w-full h-32"
              placeholder="Bio"
            ></textarea>
            {errors.recipe && <p>{errors.recipe.message}</p>}
          </div>
          <div className="mt-2">
            <input
              {...register("image", { required: "category name is required" })}
              type="file"
              className="file-input"
            />
            {errors.image && <p>{errors.image.message}</p>}
          </div>
          <button className="btn mt-2">
            Add Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
