import style from './CategoryLink.module.css'
import { useState } from 'react';
import React from 'react';

const CategoryLink = () => {
  const [activeLink, setActiveLink] = useState('All'); // Initialize 'All' as the active link

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={style.link}>
    <ul>
      <li className={activeLink === 'All' ? `${style.active}` : ''}>
        <a href="#" onClick={() => handleLinkClick('All')}>All</a>
      </li>
      <li className={activeLink === 'Corporate' ? `${style.active}` : ''}>
        <a href="#" onClick={() => handleLinkClick('Corporate')}>Corporate</a>
      </li>
      <li className={activeLink === 'Children' ? `${style.active}` : ''}>
        <a href="#" onClick={() => handleLinkClick('Children')}>Children</a>
      </li>
      <li className={activeLink === 'Men' ? `${style.active}` : ''}>
        <a href="#" onClick={() => handleLinkClick('Men')}>Men</a>
      </li>
      <li className={activeLink === 'Traditional' ? `${style.active}` : ''}>
        <a href="#" onClick={() => handleLinkClick('Traditional')}>Traditional</a>
      </li>
    </ul>
    </div>
  );
}

export default CategoryLink
