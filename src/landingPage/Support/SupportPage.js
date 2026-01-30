import React from 'react';
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import Support from './Support'

function SupportPage() {
    return ( 
        <div>
            <Support/>
            <Hero/>
            <CreateTicket/>
        </div>
     );
}

export default SupportPage;