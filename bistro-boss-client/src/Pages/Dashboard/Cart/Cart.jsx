import React from "react";
import useCart from "../../../Components/Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(cart);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-4xl text-center ">My Cart</h2>
      <div className="flex justify-between mt-5">
        <h1 className="text-2xl">Total items {cart.length}</h1>
        <h1 className="text-2xl">Total Price {totalPrice}</h1>
        <button className="btn btn-primary">pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.name}
                  <br />
                </td>
                <td>{item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-500"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
