import React from 'react';
import Hero from './Hero'
import Brokerage from './Brockerage'
import OpenAccount from '../OpenAccount';
function PricingPage() {
    return ( 
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </div>
     );
}

export default PricingPage;