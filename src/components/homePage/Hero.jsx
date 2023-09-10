import React from 'react'
import HomePage from '../../assets/homepage-1.svg'
import Image1 from '../../assets/image-1.svg'
import Image2 from '../../assets/image-2.svg'
import Image3 from '../../assets/image-3.svg'
import Styles from "./Hero.module.css"
import Button from '../reusable/Button'
import { useNavigate } from 'react-router-dom'


export const Hero = () => {
    const navigate = useNavigate();


    const navigateToAuth = () => {
        navigate("/auth")
    };
  return (
    <>
    <div className={Styles.navbar}>
        <h3>RelistedLabels</h3>
    </div>
    <div className={Styles.home}>

        <div>
            <h2>
                Join The World's Largest Shared Wardrobe
            </h2>
            <p>Buy, Sell and Rent Your Favourite Cloths</p>

            <Button name='Get Started' importance='primary' onClick={navigateToAuth} />
        </div>

        <img src={HomePage} alt="" />
        
    </div>

    <div className={Styles.about}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
    </div>

    <div className={Styles.footer}>
        <p>Ready Now?</p>
        <Button name='Get Started' importance='secondary' onClick={navigateToAuth} />
    </div>
    </>
  )
}

export default Hero;