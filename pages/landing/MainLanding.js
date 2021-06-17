import React from 'react';
import Banner from "./Banner";
import About from "./About";
import OurServices from "./OurServices";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
// import Menu from "./landing/Menu";
export default class MainLanding extends React.Component{
    render(){
        return(
            <>
                <Banner/>
                <About />
                <OurServices />
                <Portfolio />
                <Contact />
                <Footer />
            </>
        )
    }
}