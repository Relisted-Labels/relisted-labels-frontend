import React from "react";
import Hero from './Hero';
import Feature from './FeaturePage.jsx'
import LastFeature from './LastFeature.jsx'
import Footer from './Footer.jsx'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Feature />
            <LastFeature />
            <Footer />
        </>
    )
}

export default HomePage;