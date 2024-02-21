import React, { useState } from "react";
import "./LoginRegister.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { login, loginUser } from "../../redux/authSlice";
import validationSchema from "../../validations/validationSchema";
import { useNavigate } from "react-router-dom";

export default function LoginRegister({ setShow }) {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("user"));
  const { user, isLoading, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const handleSignUpClick = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };
  const handleSubmit = (values) => {
    dispatch(loginUser(values));
    setShow(false);
    if (admin?.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <div className="modal_container" id="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Sign Up</h1>
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Gsm" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button onClick={handleSignUpClick}>Sign Up</button>
              <span>
                Already have an account ?{" "}
                <a id="SignIn" onClick={handleSignInClick}>
                  Login
                </a>
              </span>
              <svg
                width="307"
                height="13"
                viewBox="0 0 307 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M148.704 12.08C147.872 12.08 147.099 11.9413 146.384 11.664C145.68 11.376 145.061 10.976 144.528 10.464C144.005 9.94133 143.6 9.33867 143.312 8.656C143.024 7.96267 142.88 7.21067 142.88 6.4C142.88 5.58933 143.024 4.84267 143.312 4.16C143.6 3.46667 144.005 2.864 144.528 2.352C145.061 1.82933 145.68 1.42933 146.384 1.152C147.099 0.863999 147.872 0.719999 148.704 0.719999C149.536 0.719999 150.304 0.863999 151.008 1.152C151.723 1.42933 152.341 1.824 152.864 2.336C153.387 2.848 153.792 3.45067 154.08 4.144C154.379 4.82667 154.528 5.57867 154.528 6.4C154.528 7.22133 154.379 7.97867 154.08 8.672C153.792 9.35467 153.387 9.952 152.864 10.464C152.341 10.976 151.723 11.376 151.008 11.664C150.304 11.9413 149.536 12.08 148.704 12.08ZM148.704 11.328C149.419 11.328 150.08 11.2053 150.688 10.96C151.296 10.7147 151.824 10.368 152.272 9.92C152.72 9.472 153.067 8.94933 153.312 8.352C153.568 7.75467 153.696 7.104 153.696 6.4C153.696 5.68533 153.568 5.03467 153.312 4.448C153.067 3.85067 152.72 3.328 152.272 2.88C151.824 2.432 151.296 2.08533 150.688 1.84C150.08 1.59467 149.419 1.472 148.704 1.472C147.989 1.472 147.328 1.59467 146.72 1.84C146.112 2.08533 145.579 2.432 145.12 2.88C144.672 3.328 144.32 3.85067 144.064 4.448C143.819 5.03467 143.696 5.68533 143.696 6.4C143.696 7.104 143.819 7.75467 144.064 8.352C144.32 8.94933 144.672 9.472 145.12 9.92C145.579 10.368 146.112 10.7147 146.72 10.96C147.328 11.2053 147.989 11.328 148.704 11.328ZM157.102 12V3.648H157.87V5.936L157.79 5.68C158.025 5.008 158.42 4.49067 158.974 4.128C159.529 3.76533 160.222 3.584 161.054 3.584V4.368C161.022 4.368 160.99 4.368 160.958 4.368C160.926 4.35733 160.894 4.352 160.862 4.352C159.934 4.352 159.209 4.64533 158.686 5.232C158.164 5.808 157.902 6.61333 157.902 7.648V12H157.102Z"
                  fill="white"
                />
                <line
                  x1="170"
                  y1="7.5"
                  x2="307"
                  y2="7.5"
                  stroke="black"
                  strokeOpacity="0.3"
                />
                <line
                  y1="7.5"
                  x2="137"
                  y2="7.5"
                  stroke="black"
                  strokeOpacity="0.3"
                />
              </svg>

              <div className="social-container">
                <a href="#" className="social">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_131_1411)">
                      <path
                        d="M25 12.5C25 18.7393 20.4287 23.9106 14.4531 24.8481V16.1133H17.3657L17.9199 12.5H14.4531V10.1553C14.4531 9.1665 14.9375 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6357 4.88281 15.2681 4.88281C12.4131 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C4.57129 23.9106 0 18.7393 0 12.5C0 5.59668 5.59668 0 12.5 0C19.4033 0 25 5.59668 25 12.5Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M17.3657 16.1133L17.9199 12.5H14.4531V10.1552C14.4531 9.1667 14.9374 8.20312 16.4902 8.20312H18.0664V5.12695C18.0664 5.12695 16.6359 4.88281 15.2683 4.88281C12.413 4.88281 10.5469 6.61328 10.5469 9.74609V12.5H7.37305V16.1133H10.5469V24.8481C11.1833 24.948 11.8355 25 12.5 25C13.1645 25 13.8167 24.948 14.4531 24.8481V16.1133H17.3657Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_131_1411">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="social">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2209 9.60876H12.6633C12.2859 9.60876 11.9805 9.91423 11.9805 10.2916V13.0273C11.9805 13.4047 12.2859 13.7101 12.6633 13.7101H17.4834C16.9578 15.0803 15.9695 16.2258 14.7162 16.9535L16.7691 20.5113C20.0619 18.6066 22.0115 15.2599 22.0115 11.5179C22.0115 10.9834 21.9711 10.6015 21.8947 10.1748C21.8318 9.84685 21.5488 9.60876 21.2209 9.60876Z"
                      fill="#167EE6"
                    />
                    <path
                      d="M11.5226 17.816C9.16416 17.816 7.10674 16.5268 6.00166 14.6221L2.44385 16.6705C4.2542 19.8105 7.6458 21.9219 11.5226 21.9219C13.4272 21.9219 15.2196 21.4098 16.7694 20.5158V20.5113L14.7165 16.9535C13.7731 17.5016 12.686 17.816 11.5226 17.816Z"
                      fill="#12B347"
                    />
                    <path
                      d="M16.7648 20.5158V20.5113L14.7119 16.9535C13.773 17.497 12.6859 17.816 11.5225 17.816V21.9219C13.4271 21.9219 15.2195 21.4097 16.7648 20.5158Z"
                      fill="#0F993E"
                    />
                    <path
                      d="M5.13906 11.4326C5.13906 10.2691 5.45801 9.18201 6.00156 8.24314L2.44375 6.1947C1.54531 7.73552 1.0332 9.52341 1.0332 11.4326C1.0332 13.3418 1.54531 15.1297 2.44375 16.6705L6.00156 14.622C5.45352 13.6832 5.13906 12.5961 5.13906 11.4326Z"
                      fill="#FFD500"
                    />
                    <path
                      d="M11.5226 5.04922C13.0589 5.04922 14.4739 5.59727 15.5745 6.50469C15.8485 6.7293 16.2438 6.71133 16.4909 6.46426L18.4271 4.52813C18.7101 4.24512 18.6876 3.78242 18.3866 3.52188C16.5403 1.91367 14.137 0.943359 11.5226 0.943359C7.6458 0.943359 4.2542 3.05469 2.44385 6.19473L6.00166 8.24316C7.10674 6.33848 9.16416 5.04922 11.5226 5.04922Z"
                      fill="#FF4B26"
                    />
                    <path
                      d="M15.5744 6.50469C15.8484 6.7293 16.2438 6.71133 16.4908 6.46426L18.427 4.52812C18.71 4.24512 18.6875 3.78242 18.3865 3.52187C16.5402 1.91367 14.1369 0.943359 11.5225 0.943359V5.04922C13.0588 5.04922 14.4738 5.59277 15.5744 6.50469Z"
                      fill="#D93F21"
                    />
                  </svg>
                </a>
                <a href="#" className="social">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_131_1403)">
                      <path
                        d="M15.7692 0C15.8222 0 15.8752 0 15.9312 0C16.0612 1.606 15.4482 2.806 14.7032 3.675C13.9722 4.538 12.9712 5.375 11.3522 5.248C11.2442 3.665 11.8582 2.554 12.6022 1.687C13.2922 0.879 14.5572 0.16 15.7692 0Z"
                        fill="white"
                      />
                      <path
                        d="M20.67 16.716C20.67 16.732 20.67 16.746 20.67 16.761C20.215 18.139 19.566 19.32 18.774 20.416C18.051 21.411 17.165 22.75 15.583 22.75C14.216 22.75 13.308 21.871 11.907 21.847C10.425 21.823 9.61 22.582 8.255 22.773C8.1 22.773 7.945 22.773 7.793 22.773C6.798 22.629 5.995 21.841 5.41 21.131C3.685 19.033 2.352 16.323 2.104 12.855C2.104 12.515 2.104 12.176 2.104 11.836C2.209 9.35396 3.415 7.33596 5.018 6.35796C5.864 5.83796 7.027 5.39496 8.322 5.59296C8.877 5.67896 9.444 5.86896 9.941 6.05696C10.412 6.23796 11.001 6.55896 11.559 6.54196C11.937 6.53096 12.313 6.33396 12.694 6.19496C13.81 5.79196 14.904 5.32996 16.346 5.54696C18.079 5.80896 19.309 6.57896 20.069 7.76696C18.603 8.69996 17.444 10.106 17.642 12.507C17.818 14.688 19.086 15.964 20.67 16.716Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_131_1403">
                        <rect width="22.773" height="22.773" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <h1>Sign In</h1>

                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />

                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />

                <a href="#">Forgot your password?</a>
                <button type="submit">Sign In</button>
                <span>
                  You don't have an account ?{" "}
                  <a id="SignUp" onClick={handleSignUpClick}>
                    create an account
                  </a>
                </span>
              </Form>
            </Formik>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <button
                  className="ghost"
                  id="SignIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <button
                  className="ghost"
                  id="SignUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
