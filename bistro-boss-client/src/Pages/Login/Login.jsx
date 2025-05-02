import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const inputRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = inputRef.current.value;
    if (validateCaptcha(user_captcha_value)){
      alert("Captcha Matched");
      setDisable(false);
    } else {
        alert("Captcha Does Not Match");
        setDisable(true);
        inputRef.current.value="";
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <label className="label">
                {" "}
                <LoadCanvasTemplate />
              </label>
              <label className="label">captcha</label>
              <input
                ref={inputRef}
                type="text"
                className="input"
                placeholder="Write captcha Value"
              />
              <button onClick={handleValidateCaptcha} className="btn btn-info btn-xs">
                validate
              </button>
              <button disabled={disable} className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </form>
        <p>Dont have an account? <Link to="/signUp">SignUp Now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
