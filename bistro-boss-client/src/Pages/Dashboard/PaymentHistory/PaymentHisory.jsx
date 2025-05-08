import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";

const PaymentHisory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <SectionTitle
          heading="Payment History"
          subHeading="Check Now"
        ></SectionTitle>
      </div>
      <div>
        <h1>Total Payments: {payments.length}</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>transactionId</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((item,idx) => <tr key={item._id}>
            <th>{idx+1}</th>
            <td>{item?.transactionId}</td>
            <td>{item?.price}</td>
            <td>{item?.status}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default PaymentHisory;
