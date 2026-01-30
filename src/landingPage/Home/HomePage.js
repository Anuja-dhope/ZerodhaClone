import React from 'react';
import Navbar from './Navbar';
import Education from './Education';
import Pricing from './Pricing';
import Stack from './Stack';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
function HomePage() {
    return ( 
        <div>
            <Hero/>
            <br></br><br></br>
            <Stack/>
            <br></br><br></br><br></br><br></br><br></br>
            <Pricing/>
            <br></br><br></br><br></br><br></br><br></br>
            <Education/>
            <OpenAccount/>
        </div>
     );
}

export default HomePage;