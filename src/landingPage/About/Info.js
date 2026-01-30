import React from 'react';
function Info() {
    return (  
        <div style={{margin:"50px 200px 50px 200px"}}>
            <h3 className='text-center'>We Pioneered the Discount Broking Model in India.<br></br>Now,We are Broking the Ground with outr Technology.</h3>
            <hr style={{marginTop:"100px"}}></hr>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,4fr)",gap:"50px",marginTop:"100px",marginLeft:"100px",marginRight:"100px"}}>
                <div>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                        <br></br><br></br>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.

                        <br></br><br></br>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.

                        <br></br><br></br>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.

                        <br></br><br></br>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;