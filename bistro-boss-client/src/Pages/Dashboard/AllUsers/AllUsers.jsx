import React from "react";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  return (
    <div className="p-8">
      <div className="flex justify-evenly ">
        <h1 className="text-2xl">All Users</h1>
        <h1 className="text-2xl">Total Users : {users.length}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default AllUsers;
