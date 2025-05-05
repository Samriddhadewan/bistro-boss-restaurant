import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const {signOutUser} = useContext(AuthContext)
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function(res){
      return res
    }, function(error){
      const status = error.response.status;
      if(status === 401 || status === 403){
        navigate("/login");
        signOutUser()
        .then(res=> {
        })
      }
      console.log("error code in the interceptor", status)
      return Promise.reject(error)
    })

  return axiosSecure;
};

export default useAxiosSecure;
