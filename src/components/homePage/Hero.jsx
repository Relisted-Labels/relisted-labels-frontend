import React from "react";
import HomePage from "../../assets/web-homepage.png";
import Styles from "./Hero.module.css";
import Button from "../reusable/Button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className={Styles.home}>
        <div className={Styles.container}>
          <div className={Styles.description}>
            <div className={Styles.navbar}>
            <h3>RelistedLabels</h3>
          </div>
            <h1>Join The World's Largest Shared Wardrobe</h1>
            <p>Buy, Sell and Rent Your Favourite Cloths</p>

            <Button
              name="Get Started"
              importance="primary"
              onClick={navigateToAuth}
            />
          </div>

          <img src={HomePage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
