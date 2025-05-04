import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  // console.log(createUser)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUser(data.name, data.photoURL).then(() => {
        console.log("User Profile Updated");
        reset();
        Swal.fire({
          title: "User Created Successful",
          icon: "success",
          draggable: true,
        });
        navigate("/")
      });
    });
    // console.log(data)
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body space-y-2"
            >
              {/* Name */}
              <div>
                <label className="label">Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-700 text-sm">Name is required</span>
                )}
              </div>
              {/* Photo URL */}
              <div>
                <label className="label">Photo URL</label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="photoURL"
                />
                {errors.photoURL && (
                  <span className="text-red-700 text-sm">
                    photoURL is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label">Email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-700 text-sm">
                    Email is required
                  </span>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label">Password</label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                  })}
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700 text-sm">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700 text-sm">
                    Password must have one uppercase one lowercase one number
                    and one spacial character
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>

            <p className="text-center pb-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
