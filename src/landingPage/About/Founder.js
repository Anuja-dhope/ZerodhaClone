import React from 'react';
function Founder() {
    return (
        <div style={{margin:"100px 200px 100px 200px",display:"grid",gridTemplateColumns:"repeat(2,4fr)",gap:"50px"}}>
            <div className='container d-flex align-items-center justify-content-end'>
                <div>
                    <img src='media/images/nithinKamath.jpg' alt='NithinKamath' height={250} style={{borderRadius:"50%",margin:"100px 0px 10px 0px"}}/>
                    <p className='text-center'>Nithin Kamath<p style={{fontSize:"smaller",color:"grey"}}>Founder, CEO</p></p>
                </div>
            </div>
            <div>
                <h3 style={{}}>People</h3>
                <br></br><br></br><br></br>
                <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                    <br></br><br></br>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                    <br></br><br></br>Playing basketball is his zen.
                    
                    <br></br><br></br>Connect on <a href='' style={{textDecoration:"none"}}>Homepage / TradingQnA / Twitter</a>
                </p>
            </div>
        </div>
      );
}

export default Founder;