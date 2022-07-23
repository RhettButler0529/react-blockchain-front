import React, { useState, useEffect } from "react";
import { Header, CoinSlider, CompanySlider, Footer, HeroSection, ImgInfoVideo, IntroAbout, IntroWithImage } from '../components';
const LandPages = () => {

    return (
        <main>
            <Header />
            <HeroSection />
            <IntroAbout />
            <IntroWithImage />
            <CoinSlider />
            <ImgInfoVideo />
            <CompanySlider />
            <Footer />
        </main>)
}

export default LandPages;