// // src/components/SplashScreen.js

import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
function ClothingRentalService() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const handleSkip = () => {
    // This function is called when the "Skip Now" button is clicked
    if (currentSlide < 3) {
      // If not on the last slide, go to the next slide
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle any action you want when the "Skip" button is clicked on the last slide
      console.log("Skipped to the end.");
    }
  };

  const navigate = useNavigate();
  const navigateToAuth = () => {
    navigate("/auth");
  };
  const navigateToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    // Simulate loading your content here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const slides = [
    <div key={1}>
      <div className="relative h-screen">
        <img
          src="https://questgig.com/api/relisted/images/321047656_199967325929041_8755075386117953127_n.jpg"
          alt="Slide 1"
          className="h-full w-full object-cover"
        />
        {currentSlide < 3 && (
          <div className="absolute bottom-0 left-0 right-0  p-4">
            {/* <button className="continue-as-guest bg-orange-500 text-gray-900 py-2 px-4 rounded-full" onClick={handleSkip}>
             Skip
           </button> */}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h2 className="text-2xl text-white font-extrabold futura">
              ACCESS THE STYLE YOU LOVE
            </h2>
            <p className="text-sm text-gray-100 font-bold futura">
              Experience our secure community to keep you looking fabulous
              without breaking your bank.
            </p>
          </div>
        </div>
      </div>
    </div>,
    <div key={2}>
      <div className="relative h-screen">
        <img
          src="https://questgig.com/api/relisted/images/image4.jpg"
          alt="Slide 2"
          className="h-full w-full object-cover"
        />
        {currentSlide < 3 && (
          <div className="absolute bottom-0 buttom left-0 right-0  p-4 justify-center flex">
            <div>
              <div className="flex space-x-3 mb-3 p-5">
                <button
                  onClick={navigateToAuth}
                  className="login-button bg-white w-[150px]  text-gray-900 py-2 px-4 font-bold mr-2"
                >
                  Sign Up
                </button>
                <button
                  onClick={navigateToAuth}
                  className="register-button bg-black w-[150px]  text-white font-bold py-2 px-4 mr-2"
                >
                  Log In
                </button>
              </div>

              <button
                onClick={navigateToHome}
                className="continue-as-guest font-bold text-center text-white py-2 px-4 "
              >
                Continue as Guest
              </button>
            </div>
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 p-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="text-2xl font-bold text-white logo-font">RELISTED</p>
            <p className="logo-font text-sm text-white ml-4">Labels</p>
          </a>
        </div>
        <div className="absolute inset-0 top-[60vh] top left-0 right-0 p-2">
          <h2 className="text-xl text-white font-light futura mt-5">
            Access the Brands you love and empower your wardrobe
          </h2>
        </div>
      </div>
    </div>,
  ];

  //   return (

  //   );
  // };

  // export default SplashScreen;

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="bg-splash1 h-screen overflow-y-scroll">
            <div className="splash-screen lg-hidden">
              <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={false}
                selectedItem={currentSlide}
                onChange={(index) => setCurrentSlide(index)}
                swipeable={true} // Enable swipe navigation
              >
                {slides}
              </Carousel>
            </div>
            <div className="sm-hidden">
              <section className="bg-splash">
                <div className="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-screen">
                  <h1 className="mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl futura">
                    ACCESS THE STYLE YOU LOVE
                  </h1>
                  <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 futura">
                    Wear the brands you love without breaking the bank.
                  </p>
                </div>
              </section>

              <section className="bg-white ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                  <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                      src="https://questgig.com/api/relisted/images/image16.jpg"
                      alt="mockup"
                    />
                  </div>
                  <div className="mr-3 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  futura">
                      EMPOWER YOUR WARDROBE
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  futura">
                      Start Lending Items and Monitize your closet
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-r from-[#B0A3CE] to-[#ECCDCB]">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                  <div className="mr-3 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white futura">
                      RENT, LEND AND RELIST
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl  futura">
                      Experience our secure community to keep you fabulous for
                      every occasion.
                    </p>
                  </div>
                  <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                      src="https://questgig.com/api/relisted/images/image2.jpg"
                      alt="mockup"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black p-15 hidden bg-opacity-50 text-gray-900 p-4 ">
              <div className="flex space-x-3 mb-3 lg-hidden">
                <button
                  className="login-button bg-pink-300 w-full text-gray-900 py-2 px-4  mr-2"
                  onClick={navigateToAuth}
                >
                  Login
                </button>
                <button
                  onClick={navigateToAuth}
                  className="register-button bg-purple-300 w-full text-gray-900 py-2 px-4 mr-2"
                >
                  Register
                </button>
              </div>

              <button
                onClick={navigateToHome}
                className="continue-as-guest w-full  text-white py-2 px-4 rounded-full"
              >
                Continue as Guest
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 sm-hidden p-4 justify-center flex">
            <div>
              <div className="flex space-x-3 mb-3 sm-hidden">
                <button
                  onClick={navigateToAuth}
                  className="login-button bg-pink-300 w-[200px] text-gray-900 py-2 px-4  mr-2"
                >
                  Login
                </button>
                <button
                  onClick={navigateToAuth}
                  className="register-button bg-purple-300 w-[200px] text-gray-900 py-2 px-4 mr-2"
                >
                  Register
                </button>
              </div>

              <button
                onClick={navigateToHome}
                className="continue-as-guest w-[420px] bg-black text-center text-white py-2 px-4 "
              >
                Continue as Guest
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ClothingRentalService;
