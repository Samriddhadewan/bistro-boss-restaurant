import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
