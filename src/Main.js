import React from 'react';
import Headers from './header/Header';
import Banner from './Banner/Banner';
import About from './About/About';
import Features from './Features/Features';
import Roadmap from './Roadmap/Roadmap';
import Tokensale from './Tokensale/Tokensale';
import Faq from './FAQ/Faq';
import Footer from './Footer/Footer'


const Main = () => {
  return (
    <>
    <Headers />
    <Banner/>
    <About />
    <Features/>
    <Roadmap/>
    <Tokensale/>
    <Faq/>
    <Footer/>
    
    </>
  )
}

export default Main