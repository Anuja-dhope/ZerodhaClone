import React from 'react';
import {Link} from 'react-router-dom'

function Universe() {
    return ( 
        <div className='text-center' style={{color:"#424242",margin:"0px 200px"}}>
            <p style={{fontSize:"20px"}}>Want to know more about our technology stack? Check out the <Link to="/">Zerodha.tech</Link> blog.</p>
            <p style={{fontSize:"30px",marginTop:"100px"}}>The Zerodha Universe</p>
            <p style={{fontSize:"18px"}}>Extend your trading and investment experience even further with our partner platforms</p>
            <br></br>
            <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
                <div style={{width:"30%"}}>
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div style={{width:"30%"}}>
                    <img src="media/images/sensibullLogo.svg" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div style={{width:"30%"}}>
                    <img src="media/images/goldenpiLogo.png" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>
            <br></br>
            <div style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
                <div style={{width:"30%"}}>
                    <img src="media/images/streakLogo.png" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div style={{width:"30%"}}>
                    <img src="media/images/smallcaseLogo.png" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div style={{width:"30%"}}>
                    <img src="media/images/dittoLogo.png" alt="Zerodha fund house" height={50}></img>
                    <p style={{fontSize:"14px",margin:"15px"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            <br></br><br></br>
            <button className='btn btn-primary' style={{width:"220px",padding:"10px",fontSize:"20px",fontWeight:"medium"}}>Sign up for free</button>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
     );
}

export default Universe;