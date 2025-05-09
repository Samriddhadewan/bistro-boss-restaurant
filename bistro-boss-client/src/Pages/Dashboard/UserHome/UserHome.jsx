import React from "react";
import useAuth from "../../../Components/Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl">
        <span>
          hi, welcome
          {user?.displayName ? user?.displayName : "back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
