import React from "react";
// import authImage from "../../assets/authImage_desktop.jpeg";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";
import { MdArrowBackIos } from "react-icons/md";

const PasswordReset = () => {
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
          <label htmlFor="password">New Password</label>
          <br />
          <input type="password" name="password" />
          <br />

          <label htmlFor="password">Confirm Password</label>
          <br />
          <input type="password" name="password" />

          <span className={styles.buttonSpan}>
            <Button importance="primary" name="Reset Password" />
          </span>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
