import React, {} from "react";
import {Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignIn.css"
const loginInitialValues = {
  email: "",
  password: "",
};

const loginVlidationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Required")
    .max(10),
});

const SignIn = () => {
  const loginFormik = useFormik({
        initialValues: loginInitialValues,
        validationSchema: loginVlidationSchema,
        onSubmit: async (values) => {
          console.log(
            "🚀 ~ file: LoginPage.js ~ line 36 ~ onSubmit: ~ values",
            values
          );
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginFormik.handleSubmit();
  };

  return (
    <div>
      <div/>
      <div>
        <div>
            <form>
              <h1>Sign in</h1>
              <h6>
				{/* {error} */}
				</h6>    
              <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                />
                {loginFormik.errors.email ? (
                  <span>
                    {loginFormik.errors.email}
                  </span>
                ) : null}
              <span>Password</span>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  autoComplete="on"
                />
                {loginFormik.errors.password ? (
                  <span>
                    {loginFormik.errors.password}
                  </span>
                ) : null}
              <div>
                Create account :
                <Link to="/signUp">
                  Click here
                </Link>
              </div>
              <div>
                <button type="" title="Sign In" onClick={handleLogin}></button>
              </div>
            </form>
        </div>

        <div>
          <div>
            <div>
              <h1>Hello, Friend!</h1>

              <p>
                Enter your personal details and start journey with us-{" "}
                <Link to="/signUp">Click here</Link>
              </p>
            </div>
            <div/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
