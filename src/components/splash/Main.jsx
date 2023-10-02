// // src/components/SplashScreen.js

// import React, { useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
// import { Carousel } from 'react-responsive-carousel';

// const SplashScreen = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSkip = () => {
//     // This function is called when the "Skip Now" button is clicked
//     if (currentSlide < 3) {
//       // If not on the last slide, go to the next slide
//       setCurrentSlide(currentSlide + 1);
//     } else {
//       // Handle any action you want when the "Skip" button is clicked on the last slide
//       console.log('Skipped to the end.');
//     }
//   };

//   const slides = [
//     <div key={1}>
//       <div className="relative h-screen">
//         <img
//           src="https://questgig.com/api/relisted/images/image11.jpg"
//           alt="Slide 1"
//           className="h-full w-full object-cover"
//         />
//         {currentSlide < 3 && (
//            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-gray-900 p-4">
//            <button className="login-button bg-blue-500 text-gray-900 py-2 px-4 rounded-full mr-2">
//              Login
//            </button>
//            <button className="register-button bg-green-500 text-gray-900 py-2 px-4 rounded-full mr-2">
//              Register
//            </button>
//            <button className="continue-as-guest bg-orange-500 text-gray-900 py-2 px-4 rounded-full" onClick={handleSkip}>
//              Continue as Guest
//            </button>
//          </div>
//         )}
//          <div className="absolute inset-0 flex items-center justify-center">
//           <div>
//           <h2 className="text-3xl text-gray-900 font-extrabold">JOIN THE COMMUNITY</h2>
//           <p className='text-1xl text-gray-900 font-bold'>Join the African Largest shared wardrobe</p>
//           </div>
//         </div>
//       </div>
//     </div>,
//     <div key={2}>
//       <div className="relative h-screen">
//         <img
//           src="https://questgig.com/api/relisted/images/image17.jpg"
//           alt="Slide 2"
//           className="h-full w-full object-cover"
//         />
//         {currentSlide < 3 && (
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-gray-900 p-4">
//             <button className="skip-button" onClick={handleSkip}>
//               Skip Now
//             </button>
//           </div>
//         )}
//          <div className="absolute inset-0 flex items-center justify-center">
//           <h2 className="text-3xl text-gray-900 font-semibold">CTA Text for Slide 1</h2>
//         </div>
//       </div>
//     </div>,
//     <div key={3}>
//       <div className="relative h-screen">
//         <img
//           src="https://questgig.com/api/relisted/images/327862073_1329718951174745_4753541720980693501_n (2).jpg"
//           alt="Slide 3"
//           className="h-full w-full object-cover"
//         />
//         {currentSlide < 3 && (
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-gray-900 p-4">
//             <button className="skip-button" onClick={handleSkip}>
//               Skip Now
//             </button>
//           </div>
//         )}
//          <div className="absolute inset-0 flex items-center justify-center">
//           <h2 className="text-3xl text-gray-900 font-semibold">CTA Text for Slide 1</h2>
//         </div>
//       </div>
//     </div>,
//     <div key={4}>
//       <div className="relative h-screen">
//         <img
//           src="https://questgig.com/api/relisted/images/327862073_1329718951174745_4753541720980693501_n (2).jpg"
//           alt="Slide 4"
//           className="h-full w-full object-cover"
//         />
//         {currentSlide < 4 && (
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-gray-900 p-4">
//           <button className="login-button bg-blue-500 text-gray-900 py-2 px-4 rounded-full mr-2">
//             Login
//           </button>
//           <button className="register-button bg-green-500 text-gray-900 py-2 px-4 rounded-full mr-2">
//             Register
//           </button>
//           <button className="continue-as-guest bg-orange-500 text-gray-900 py-2 px-4 rounded-full" onClick={handleSkip}>
//             Continue as Guest
//           </button>
//         </div>
//         )}
//          <div className="absolute inset-0 flex items-center justify-center">
//           <h2 className="text-3xl text-gray-900 font-semibold">CTA Text for Slide 1</h2>
//         </div>
//       </div>
//     </div>,
//   ];

//   return (
//     <div className="splash-screen">
//       <Carousel
//         showArrows={false}
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         infiniteLoop={false}
//         selectedItem={currentSlide}
//         onChange={(index) => setCurrentSlide(index)}
//         swipeable={true} // Enable swipe navigation
//       >
//         {slides}
//       </Carousel>
//     </div>
//   );
// };

// export default SplashScreen;



import React from 'react';
import { useNavigate } from "react-router-dom";
function ClothingRentalService() {
  const navigate = useNavigate();
  const navigateToAuth = () => {
  navigate("/auth");
  };
  const navigateToHome = () => {
    navigate("/home");
    };
  return (
    <>
    <div className="bg-splash h-screen overflow-y-scroll">
     <div className='sm-hidden'>
    <section className="bg-splash">
      <div className="py-5 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 h-screen">
       
        <h1 className="mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl futura">ACCESS THE STYLE YOU LOVE</h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 futura">Wear the brands you love without breaking the bank.</p>
       
       
      </div>
    </section>

    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://questgig.com/api/relisted/images/image16.jpg" alt="mockup" />
        </div>
        <div className="mr-3 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white futura">EMPOWER YOUR WARDROBE</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 futura">Start Lending Items and Monitize your closet</p>
          
        </div>
       
      </div>
    </section>

  

    <section className="bg-gradient-to-r from-[#B0A3CE] to-[#ECCDCB]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-3 place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white futura">RENT, LEND AND RELIST</h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl  futura">Experience our secure community to keep you fabulous for every occasion.</p>
          
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://questgig.com/api/relisted/images/image2.jpg" alt="mockup" />
        </div>
      </div>
    </section>
    </div>
       <div className="absolute bottom-0 left-0 right-0 bg-black p-15 lg-hidden bg-opacity-50 text-gray-900 p-4 ">
        
        <div className='flex space-x-3 mb-3 lg-hidden'>
        <button className="login-button bg-pink-300 w-full text-gray-900 py-2 px-4  mr-2" onClick={navigateToAuth}>
             Login
         </button>
            <button onClick={navigateToAuth} className="register-button bg-purple-300 w-full text-gray-900 py-2 px-4 mr-2">
             Register
           </button>
        </div>
           
           <button onClick={navigateToHome} className="continue-as-guest w-full  text-white py-2 px-4 rounded-full" >
             Continue as Guest
           </button>
           </div>
          </div>
         


    <div className="absolute bottom-0 left-0 right-0 sm-hidden p-4 justify-center flex">
      <div>
          <div className='flex space-x-3 mb-3 sm-hidden'>
        <button onClick={navigateToAuth} className="login-button bg-pink-300 w-[200px] text-gray-900 py-2 px-4  mr-2">
             Login
         </button>
            <button onClick={navigateToAuth} className="register-button bg-purple-300 w-[200px] text-gray-900 py-2 px-4 mr-2">
             Register
           </button>
        </div>
           
           <button onClick={navigateToHome} className="continue-as-guest w-[420px] bg-black text-center text-white py-2 px-4 " >
             Continue as Guest
           </button>
          </div>
          </div>
   </>
  );
}

export default ClothingRentalService;
