import { React, useState } from "react"
import { useNavigate } from "react-router-dom";
import Spinner from "../reusable/Spinner";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
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
          "https://questgig.com/api/relisted/auth/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control":"no-cache",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.status === 200) {
          setMessage("Password reset email sent. Check your inbox.");
          console.log(response);
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

  const navigate = useNavigate();
  const navigateToAuth = () => {
  navigate("/auth");
};

return (
  
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex logo-font items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Relisted Labels    
      </a>
      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-pink-600 md:text-2xl ">
              Forgot Password
          </h2>
          <p className='mb-1 text-sm text-gray-500'> Please enter your email to receive a confirmation code to reset your
           password
         </p>
         <div>{message && <div>{message}</div>}</div>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                 
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@email.com" required="" value={email} onChange={handleEmailChange} />
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" class="w-full text-white bg-[#B0A3CE] hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}
             importance="primary"
             name={loading ? <Spinner /> : "Confirm Email"}>{loading ? "Loading......" : "Confirm Email"}</button>
             <button type="submit" class="w-full text-gray-900 bg-white  ring-2 ring-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={navigateToAuth}
             >Go Back</button>
          </form>
      </div>
  </div>
</section>
);
}

export default ForgotPassword;