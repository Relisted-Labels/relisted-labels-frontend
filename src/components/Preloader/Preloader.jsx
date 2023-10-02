import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Create a CSS file for styling

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`preloader bg-gradient-to-r from-[#B0A3CE] to-[#ECCDCB] ${isLoading ? 'fade-in' : 'fade-out'}`}>
      <div className="loader">
        <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="text-3xl font-bold text-gray-900 logo-font">R E L I S T E D</p>
            <p className="logo-font text-sm text-gray-900 ml-4">LABELS</p>
          </a>
      </div>
    </div>
  );
};

export default Preloader;
