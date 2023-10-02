import React from "react";
import Hero from './Hero';
import Feature from './FeaturePage.jsx'
import LastFeature from './LastFeature.jsx'
import SliderFeature from './SliderFeature'
import EndFeature from './EndFeature'
import SliderSecond from './SliderSecond';
import Footer from './Footer.jsx'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Feature />
            <LastFeature />
            <SliderFeature />
            <EndFeature />
            <SliderSecond />
            <Footer />
        </>
    )
}

export default HomePage;