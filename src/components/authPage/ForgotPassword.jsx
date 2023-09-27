import { React, useState } from "react"
// import authImage from "../../assets/authImage_desktop.jpeg";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";
import Spinner from "../reusable/Spinner";

import { MdArrowBackIos } from "react-icons/md"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate a loading delay of 2 seconds
      setTimeout(async () => {
        const response = await fetch(
          "https://relisted-labels-dev.onrender.com/auth/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.status === 200) {
          setMessage("Password reset email sent. Check your inbox.");
          console.log(response.data);
        } else {
          const data = await response.json();
          setMessage(data.error || "Password reset request failed.");
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
          <Link to="/auth" className={styles.linkTo}>
            <span className={styles.linkCont}>
              <MdArrowBackIos className={styles.authIcon} />
              {/* <span className={styles.linkStyle}>Forgot password</span> */}
            </span>
          </Link>
        </div>

        <h2 className={styles.forgotPasswordHeader}>Forgot Password?</h2>
        <p className={styles.authTitle}>
          Please enter your email to receive a confirmation code to reset your
          password
        </p>
        <div>{message && <div>{message}</div>}</div>
        <label htmlFor="password">Email Address</label>
        <br />
        <input type="email" value={email} onChange={handleEmailChange} />

        <span className={styles.buttonSpan}>
          <Button
            onClick={handleSubmit}
            importance="primary"
            name={loading ? <Spinner /> : "Confirm Email"}
          />
        </span>
      
      </form>
    </div>
  </div>
);
}

export default ForgotPassword;