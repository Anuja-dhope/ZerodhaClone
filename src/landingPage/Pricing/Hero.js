import React from 'react';
function Hero() {
    return ( 
        <div style={{textAlign:"center",color:"#424242",margin:"100px 200px"}}>
            <div style={{margin:"100px"}}>
                <h2 style={{padding:"10px"}}>Charges</h2>
                <p>List of All Charges and Taxes</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%",gap:"25px"}}>
                <div>
                    <img src='media/images/pricing0.svg' alt='0 logo' height={200}/>
                    <h3>Free equity delivery</h3>
                    <p style={{color:"gray"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div>
                    <img src='media/images/intradayTrades.svg' alt='0 logo' height={200}/>
                    <h3>Intraday and F&O trades</h3>
                    <p style={{color:"gray"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div>
                    <img src='media/images/pricing0.svg' alt='0 logo' height={200}/>
                    <h3>Free direct MF</h3>
                    <p style={{color:"gray"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;