import React from 'react';

export default function LastFeature() {
    return (
<div className="bg-white ">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-half relative z-10" data-aos="fade-down" data-aos-duration="1200" src="https://questgig.com/api/relisted/images/image10.jpg" alt="Relistlabels"/>
       
        <div className="mt-4 md:mt-0 relative z-10">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Hand-Embroidered.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">Discover the latest styles featuring hand-embroidered details and natural tones.</p>
            <a href="#" className="inline-flex items-center text-white bg-[#B0A3CE] hover:bg-[#B0A3CE] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>
    )
}