import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Components/Hooks/useMenu/useMenu";
import { FaPen, FaTrash, FaUikit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu,loading,refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  console.log(menu);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "The Item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        subHeading={"Hurry Up"}
        heading="MANAGE ITEMS"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {menu.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  

                  <td>
                    <Link to={`/dashboard/update/${item._id}`}> 
                    <button className="btn btn-ghost btn-lg">
                      <FaPen className="text-orange-400"></FaPen>
                    </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
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
    </div>
  );
};

export default ManageItems;
