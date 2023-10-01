import React from "react";
import Hero from './Hero';
import Feature from './FeaturePage.jsx'
import LastFeature from './LastFeature.jsx'
import EndFeature from './EndFeature'
import Footer from './Footer.jsx'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Feature />
            <LastFeature />
            <EndFeature />
            <Footer />
        </>
    )
}

export default HomePage;