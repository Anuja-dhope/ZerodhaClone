import React from 'react';
function Hero() {
    return (
        <div className='container text-center d-flex flex-column align-items-center justify-content-center'>
            <div>
                <img src='media/images/homeHero.png' alt='HomeHero Image' width={"100%"}/>
            </div>
            <br></br><br></br><br></br>
            <div>
                <h1 className='' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="../Signup"><button className='btn btn-primary ' style={{ width: '30%' }} >Signup for Free</button></a>
            </div>
        </div>
      );
}

export default Hero;