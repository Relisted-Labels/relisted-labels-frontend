import { React, useState } from "react"
// import authImage from "../../assets/authImage_desktop.jpeg";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";
import Button from "../reusable/Button";
import { MdArrowBackIos } from "react-icons/md"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a request to the forgot password route with the 'email' state.
    try {
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
        // Password reset email sent successfully
        // const responseData = await response.json();
        // const token = responseData.token;
        setMessage("Password reset email sent. Check your inbox.");
        console.log(response.data);


        // Redirect to the frontend with the token
        // window.location.href = `https://relisted-labels-frontend.vercel.app/resetpassword/${token}`;
      } else {
        const data = await response.json();
        setMessage(data.error || "Password reset request failed.");
        console.log(response.data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred while processing your request.");
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
        <label htmlFor="password">Email Address</label>
        <br />
        <input type="email" value={email} onChange={handleEmailChange} />

        <span className={styles.buttonSpan}>
          <Button
            onClick={handleSubmit}
            importance="primary"
            name="Confirm Email"
          />
        </span>
        {message && <div>{message}</div>}
      </form>
    </div>
  </div>
);
}

export default ForgotPassword;