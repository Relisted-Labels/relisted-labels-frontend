import React, { useState } from "react";
// import authImage from "../../assets/authImage_desktop.jpeg";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";
import Spinner from "../reusable/Spinner";
import { MdArrowBackIos } from "react-icons/md";
import { useParams } from "react-router-dom";

const PasswordReset = () => {
     const { token } = useParams();
     const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);
   



   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };


   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);

     try {
       // Simulate a loading delay of 2 seconds
       setTimeout(async () => {
         const response = await fetch(
           "https://relisted-labels-dev.onrender.com/auth/reset-password",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify({ token, password }),
           }
         );

         if (response.status === 200) {
           setMessage(
             "Password reset successful. You can now log in with your new password."
           );
           console.log(response.data);
         } else {
           const data = await response.json();
           setMessage(data.error || "Password reset failed.");
           console.log(response.data);
         }
       }, 2000); 
     } catch (error) {
       console.error("An error occurred:", error);
       setMessage("An error occurred while processing your request.");
     } finally {
       setLoading(false);
     }
   };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authFormContainer}>
        <form className={styles.authForm}>
          <div className={styles.link}>
            <Link to="/forgotpassword" className={styles.linkTo}>
              <span className={styles.linkCont}>
                <MdArrowBackIos className={styles.authIcon} />
              </span>
            </Link>
          </div>

          <h2 className={styles.forgotPasswordHeader}>Create new Password</h2>
          <p className={styles.authTitle}>
            Your new password must be unique from those previously used
          </p>
          <div>
          {message && <div>{message}</div>}
          </div>

          <label htmlFor="password">New Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <label htmlFor="password">Confirm Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <span className={styles.buttonSpan}>
            <Button
              onClick={handleSubmit}
              importance="primary"
              name={loading ? <Spinner /> : "Reset Password"}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
