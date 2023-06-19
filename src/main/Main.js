import React from 'react';

import Hero from './hero/Hero'
import AboutUs from './aboutus/AboutUs';
import Features from './features/Features';
import Why from './why/Why';
import Products from './products/Products';
import Review from './review/Review';
import Contact from './contact/Contact';
import Partners from './partners/Partners';
import './Main.css'
function Main(props) {
    return (
        <div className='main_container'>

            <Hero />
            <AboutUs />
            <Features />
            <Why />
            <Products />
            <Review />
            <Contact />
            <Partners />


        </div>
    );
}

export default Main;