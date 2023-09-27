import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Button from "../reusable/Button";


function EmailVerification() {
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Simulate fetching user data from JWT in local storage
    const jwtToken = localStorage.getItem("userAuthToken");
    if (jwtToken) {
      const decoded = jwt_decode(jwtToken);
      setUserId(decoded.user.id);
    }
  }, []);

  useEffect(() => {
    if (token && userId) {
      // This is the second route for email verification
      fetch(
        `https://relisted-labels-dev.onrender.com/auth/verify-user-email/end?verifyToken=${token}&userId=${userId}`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.status === 200) {
            setMessage("Email verified successfully.");
          } else if (response.status === 400) {
            setMessage("Email verification failed. Invalid or expired token.");
          } else {
            setMessage("An error occurred while processing your request.");
          }
          setVerificationComplete(true);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          setMessage("An error occurred while processing your request.");
          setVerificationComplete(true);
        });
    } else {
      // This is the first route to initiate email verification
      setMessage("Click the button to initiate email verification.");
    }
  }, [token, userId]);

  const initiateVerification = async () => {
    // Fetch the first route to start the email verification process
    try {
      const response = await fetch(
        "https://relisted-labels-dev.onrender.com/auth/verify-user-email/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (response.status === 200) {
        // Redirect to the verification link with the token
        window.location.href = `https://relisted-labels-frontend.vercel.app/EmailVerification/${token}`;
      } else {
        setMessage("Email verification initiation failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{message}</p>
      {!verificationComplete && (
        <Button
          onClick={initiateVerification}
          importance="primary"
          name="Initiate Email Verification"
        />
      )}
    </div>
  );
}

export default EmailVerification;
