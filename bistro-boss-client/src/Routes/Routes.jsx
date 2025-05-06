import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order"
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Components/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
      },
    ],
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [

      // normal users routes
      {
        path:"cart",
        element: <Cart></Cart>
      },
      // admin routes
      {
        path:"allUsers",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path:"addItems",
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      }

    ]
  }
]);

export default Routes;
