import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon


export default function EndFeature() {
  return (

<div className="gap-8 items-center mt-5 py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
<img className="w-half relative z-10" data-aos="fade-out" data-aos-duration="3000" src="https://questgig.com/api/relisted/images/image20.jpg" alt="Relistlabels"/>

<div className="mt-4 md:mt-0 relative z-10">
    <h2 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 futura">BRUNCH</h2>
    <p className=" font-normal text-gray-700 text-5xl">
    →
            </p>
    <a className="mb-6 font-light text-gray-500 md:text-lg futura">Rent Matching Sets</a>
   
</div>
</div>
  );
}
