import React from 'react';

function Pricing() {
  return (
    <div className="container" style={{marginLeft:"200px"}}>
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-4 col-sm-12" style={{width:"300px"}}>
          <h3>Unbeatable Pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" className="btn btn-primary">See Pricing</a>
        </div>

        {/* Right Column */}
        <div className="col-lg-8 col-sm-12" style={{width:"800px"}}>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <img src="media/images/pricing0.svg" alt="Free Account Opening" className="img-fluid mb-2" />
              <p>Free Account Opening</p>
            </div>
            <div className="col-md-4 mb-4">
              <img src="media/images/pricing0.svg" alt="Free Equity Delivery" className="img-fluid mb-2" />
              <p>Free Equity Delivery and Mutual Funds</p>
            </div>
            <div className="col-md-4 mb-4">
              <img src="media/images/intradayTrades.svg" alt="Intraday and F&O" className="img-fluid mb-2" />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;