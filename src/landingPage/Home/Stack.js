import React from 'react';
function Stack() {
    return ( 
        <div style={{margin:"50px 200px 50px 200px"}}>
        <div className='container d-flex align-items-center' style={{display:"grid", gridTemplateColumns:"40% 60%",gap:"50px"}}>
            <div className=''>
                <br></br>
                <br></br>
                <br></br>
                <h2>Trust with Confidence</h2>
                <br></br>
                <br></br>
                <br></br>
                <h3>Customer-first always</h3>
                <p style={{color:"gray"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <br></br>
                <h3>No spam or gimmicks</h3>
                <p style={{color:"gray"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                <br></br>
                <h3>The Zerodha universe</h3>
                <p style={{color:"gray"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <br></br>
                <h3>Do better with money</h3>
                <p style={{color:"gray"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='' style={{}}>
                <img src='media/images/ecosystem.png' className='' width={"100%"}/>
                <div className='d-flex align-items-center justify-content-center'>
                  <a href=''>Explore our products</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href=''>Try KITE Demo</a>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className='container d-flex alig-items-center justify-content-center' style={{}}>
            <img src='media/images/pressLogos.png'/>
        </div>
        </div>
     );
}

export default Stack;