import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handleGoogleLogin = () => {
    loginWithGoogle().then((res) => {
      const userData = {
        email: res.user.email,
        name: res.user.displayName,
      };
      axiosPublic.post("/users", userData).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };

  return (
    <div className="my-2 px-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleLogin} className="btn w-full">
        {" "}
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default GoogleLogin;
