import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import authImage from "../../assets/authImage_desktop.jpeg";

import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";

const AuthPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [loginError, setLoginError] = useState(""); //Make this an array from which you can push and pop errors till it's empty
  const [registerError, setRegisterError] = useState("");
  const [loginCredentials, setLoginCredentials] = useState({
    identifier: "",
    password: "",
  });
  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const usernameRegex = /^\w+$/;
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const isSubmitDisabled =
    !registerCredentials.password ||
    !registerCredentials.username ||
    !registerCredentials.email;
  const navigate = useNavigate();

  const isUserAuthenticated = () => {
    const token = localStorage.getItem("userAuthToken");
    if (token) {
      navigate("/listings");
    } else {
      console.log("User not yet authenticated");
    }
  };

  useEffect(() => {
    isUserAuthenticated();
  }, []);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterCredentials((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    let error = null;

    try {
      const response = await axios.post(
        "https://questgig.com/api/relisted/auth/register",
        registerCredentials,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        const userData = response.data.userData;
        localStorage.setItem("userData", userData);
        navigate("/emailverification");
        setHasAccount(true);
      } else {
        error =
          "An unknown error occurred. Please validate your details and try again.";
        console.log("Error:", error); // Log the error to the console
        setRegisterError(response.data.error);
      }
    } catch (error) {
      console.log("Error submitting the form:", error);
      setRegisterError(error.response.data.error); // Log any network request error
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://questgig.com/api/relisted/auth/login",
        loginCredentials
      );
      if (response.status === 200) {
        const token = response.data.accessToken;
        const userData = response.data.userData;
        localStorage.setItem("userAuthToken", token);
        localStorage.setItem("userData", userData);
        setIsAuthenticated(true);
        navigate("/listings");
      } else if(response.status === 409){
        navigate("/emailverification");
      }
       else {
        setLoginError(
          "An unknown error occured. Please validate your details and try again."
        );
      }
    } catch (error) {
      console.error("Error logging in:", error);
      console.error("Response data:", error.response.data);
      setLoginError(error.response.data.error); // Log the response data
    }
  };

  return (
    <div className={styles.authContainer}>
      <img
        src={authImage}
        className={styles.authImage}
        alt="Black Model in Black and White"
      />
      {!hasAccount ? (
        <div className={styles.authFormContainer}>
          <form className='{styles.authForm}' onSubmit={registerHandler}>
          <div className="flex items-center">
            <h2 className="text-2xl font-extrabold text-pink-600">Welcome to Relisted Labels !</h2>
            </div><div className="flex items-center">
            <h4 className="text-lg">CREATE AN ACCOUNT</h4>
            </div>
            <br />
            <p className='text-red-700 text-sm'>{registerError}</p>
            {registerCredentials.username &&
              !usernameRegex.test(registerCredentials.username) && (
                <p className={styles.error}>
                  Username can only contain letters, numbers, and underscores.
                </p>
              )}
            {registerCredentials.username &&
              registerCredentials.username.length < 6 && (
                <p className={styles.error}>
                  username must be at least 6 characters
                </p>
              )}

            {registerCredentials.password &&
              !passwordRegex.test(registerCredentials.password) && (
                <p className={styles.error}>
                  Password must be at least 8 characters and contain at least
                  one letter and one number.
                </p>
              )}
            {registerCredentials.email &&
              !emailRegex.test(registerCredentials.email) && (
                <p className={styles.error}>
                  Please enter a valid email address.
                </p>
              )}

            <div className='mb-2'>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. john112"
                required=""
                value={registerCredentials.username}
                onChange={handleRegisterChange}
              />
            </div>

            <div className='mb-2'>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john@email.com"
                required=""
                value={registerCredentials.email}
                onChange={handleRegisterChange}
              />
            </div>
           
            <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={registerCredentials.password}
              onChange={handleRegisterChange} />
                  </div>
                  <div class="flex items-start mt-3">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2" name="Sign Up"
                disabled={isSubmitDisabled}
                onClick={registerHandler}>Create an account</button>
                 
            {/* <span className={styles.buttonSpan}>
              <Button
                importance="primary"
                name="Sign Up"
                disabled={isSubmitDisabled}
                onClick={registerHandler}
              />
            </span> */}
            <p className={styles.authOption}>Or Sign Up With</p>

            {/* Add a continue with button here later */}

            <p className={styles.authOption}>
              Already have an account?{" "}
              <span
                className="authLink"
                onClick={() => {
                  setHasAccount(true);
                }}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div className={styles.authFormContainer}>
          <form className={styles.authForm} onSubmit={loginHandler}>
            <h2 className={styles.authHeader}>Welcome Back !</h2>
            <h4 className={styles.authTitle}>LOG IN</h4>
            <br />
            <br />
            <p className="text-red-700 text-sm">{loginError}</p>
            
            <div className="mb-2">
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                      <input type="text" name="identifier" id="identifier" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. john112" required="" value={loginCredentials.identifier}
              onChange={handleLoginChange} />
                  </div>
            <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={loginCredentials.password}
              onChange={handleLoginChange} />
                  </div>
            <p className={styles.linkContain}>
              <Link className={styles.linkStyle} to="/forgotpassword">
                Forgot your password?
              </Link>
            </p>

            <button class="w-full text-white bg-pink-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
                name="Log in"
                onClick={loginHandler}>Login</button>
            
            <p className={styles.authOption}>Or Log In With</p>

            <p className={styles.authOption}>
              Don't have an account yet?{" "}
              <span
                className="authLink"
                onClick={() => {
                  setHasAccount(false);
                }}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
