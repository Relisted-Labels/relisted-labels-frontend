import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 // Import the MailIcon from Hero Icons

function EmailVerification() {
  const { token } = useParams();
  
  const [message, setMessage] = useState("");
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  console.log("Token:", token + userId);
  useEffect(() => {
    // Simulate fetching user data from JWT in local storage
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData); 
    if (userData) {
      setUserId(userData.userId);
      setEmail(userData.email);
    }
  }, []);

  useEffect(() => {
    if (token && userId) {
      console.log(token);
      // This is the second route for email verification
      fetch(
        `https://questgig.com/api/relisted/auth/endVerifyEmail?verifyToken=${token}&userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      
    
      )
        .then((response) => {
          if (response.status === 200) {
            setMessage("Email verified successfully, You can Now Login !");
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
      setMessage("To Finish your Registration we need to confirm your email :)");
    }
  }, [token, userId]);

  const initiateVerification = async () => {
    // Fetch the first route to start the email verification process
    try {
      const response = await fetch(
        "https://questgig.com/api/relisted/auth/startVerifyEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({
            email: email, // Replace with the actual email
            userId: userId, // Replace with the actual userId
          }),
        }
      );
      

      if (response.status === 200) {
        // Redirect to the verification link with the token
        setMessage("We've Sent you an Email, check your Inbox or Junk");
        // window.location.href = `https://questgig.com/api/relisted/auth/email-verification?token=${token}`;
      } else {
        setMessage("Email verification initiation failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24 animate-bounce"
            >
               <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>
          </div>

          <h2 className="text-3xl font-semibold mb-4">Email Verification</h2>
          <p className="text-lg mb-4">{message}</p>
          {!verificationComplete && (
            <div className="flex justify-center">
            <button
              onClick={initiateVerification}
              importance="primary"
              name="Initiate Email Verification"
              className="bg-[#B0A3CE] hover:bg-blue-600 text-white rounded-full py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              {/* Use Hero Icons MailIcon */}
              {/* <MailIcon className="w-6 h-6 mr-2 animate-bounce" /> */}
              Send Email Verification
            </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;