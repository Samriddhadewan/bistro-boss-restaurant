import React from "react";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {data} = useQuery({
    queryKey: ['adminStats'],
    queryFn: async()=>{
        const res = await axiosSecure("/adminDashboard")
        return res.data;
    }
  })
  console.log(data)



  return (
    <div>
      <h2>
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "back"}
      </h2>

      <div className="stats shadow">
  <div className="stat place-items-center">
    <div className="stat-title">Revenue</div>
    <div className="stat-value">{data.revenueFixed}</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">{data.users}</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Payments</div>
    <div className="stat-value">{data.payments}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Products</div>
    <div className="stat-value">{data.products}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>



    </div>
  );
};

export default AdminHome;
