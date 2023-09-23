import React from "react"
import authImage from "../../assets/authImage_desktop.jpeg";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";
import { MdArrowBackIos } from "react-icons/md"

const ForgotPassword = () => {
return (
  <div className={styles.authContainer}>
    <img
      src={authImage}
      className={styles.authImage}
      alt="Black Model in Black and White"
    />

    <div className={styles.authFormContainer}>
      <form className={styles.authForm}>
        <div className={styles.link}>
          <div>
            <MdArrowBackIos />
          </div>
          <Link to="/auth">
            <p className={styles.linkStyle}>Forgot password</p>
          </Link>
        </div>

        <h2 className={styles.forgotPasswordHeader}>Forgot Password?</h2>
        <p className={styles.authTitle}>
          Please enter your email to receive a confirmation code to reset your
          password
        </p>
        <label htmlFor="password">Email Address</label>
        <br />
        <input type="email" name="email" />

        <span className={styles.buttonSpan}>
          <Button importance="primary" name="Confirm Email" />
        </span>
      </form>
    </div>
  </div>
);
}

export default ForgotPassword;