import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("/login") || location.pathname.includes("/signUp");
  return (
    <div>
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
