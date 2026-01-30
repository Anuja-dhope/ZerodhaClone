import React from 'react';
function Hero() {
    let listItemStyle={border:"1px solid rgba(222, 220, 220, 0.65)",height:"50px", width:"450px"}
    let listheaderStyle={border:"1px solid rgba(220, 220, 220, 0.65)",height:"50px", width:"450px",background:"rgba(225, 224, 224, 0.46)",color:"black"}
    return ( 
        <div style={{display:"grid",gridTemplateColumns:"65% 45%",gap:"45px",margin:"50px 300px 50px 200px"}}>
            <div>
  <div className="dropdown" style={{width:"100%", marginBottom:"30px"}}>
    <a 
      className="btn dropdown-toggle d-flex align-items-center justify-content-between" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={{width:"100%", border:"1px solid rgba(220, 220, 220, 0.65)", textAlign:"left"}}
    >
      <span className="d-flex align-items-center">
        <span style={{backgroundColor:"#e6f0ff", padding:"14px", borderRadius:"4px", marginRight:"18px"}}>
          <i className="fa-solid fa-circle-plus"></i>
        </span>
        Account Opening
      </span>
    </a>
    <ul className="dropdown-menu" style={{width:"100%"}}>
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div className="dropdown" style={{width:"100%", marginBottom:"30px"}}>
    <a 
      className="btn dropdown-toggle d-flex align-items-center justify-content-between" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={{width:"100%", border:"1px solid rgba(220, 220, 220, 0.65)", textAlign:"left"}}
    >
      <span className="d-flex align-items-center">
        <span style={{backgroundColor:"#e6f0ff", padding:"14px", borderRadius:"4px", marginRight:"18px"}}>
          <i className="fa-regular fa-circle-user"></i>
        </span>
        Your Zerodha Account
      </span>
    </a>
    <ul className="dropdown-menu" style={{width:"100%"}}>
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div className="dropdown" style={{width:"100%", marginBottom:"30px"}}>
    <a 
      className="btn dropdown-toggle d-flex align-items-center justify-content-between" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={{width:"100%", border:"1px solid rgba(220, 220, 220, 0.65)", textAlign:"left"}}
    >
      <span className="d-flex align-items-center">
        <span style={{backgroundColor:"#e6f0ff", padding:"14px", borderRadius:"4px", marginRight:"18px"}}>
          <i className="fa-regular fa-circle-left"></i>
        </span>
        Kite
      </span>
    </a>
    <ul className="dropdown-menu" style={{width:"100%"}}>
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div className="dropdown" style={{width:"100%", marginBottom:"30px"}}>
    <a 
      className="btn dropdown-toggle d-flex align-items-center justify-content-between" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={{width:"100%", border:"1px solid rgba(220, 220, 220, 0.65)", textAlign:"left"}}
    >
      <span className="d-flex align-items-center">
        <span style={{backgroundColor:"#e6f0ff", padding:"14px", borderRadius:"4px", marginRight:"18px"}}>
          <i className="fa-solid fa-indian-rupee-sign"></i>
        </span>
        Funds
      </span>
    </a>
    <ul className="dropdown-menu" style={{width:"100%"}}>
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>

  <div className="dropdown" style={{width:"100%", marginBottom:"30px"}}>
    <a 
      className="btn dropdown-toggle d-flex align-items-center justify-content-between" 
      href="#" 
      role="button" 
      data-bs-toggle="dropdown" 
      aria-expanded="false" 
      style={{width:"100%", border:"1px solid rgba(220, 220, 220, 0.65)", textAlign:"left"}}
    >
      <span className="d-flex align-items-center">
        <span style={{backgroundColor:"#e6f0ff", padding:"14px", borderRadius:"4px", marginRight:"18px"}}>
          <i className="fa-solid fa-coins"></i>
        </span>
        Coin
      </span>
    </a>
    <ul className="dropdown-menu" style={{width:"100%"}}>
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </div>
</div>
            <div>
                <div style={{background:"#faf0dc70",borderLeft:"10px solid #fba004",padding:"10px",color:"blue"}}>
                    <ul>
                        <br></br>
                        <li><a href="">Offer for Sale(OFS)- January 2026</a></li>
                        <br></br>
                        <li><a href="">Modification in the contract specication in Siver and Silver mini option Contracts</a></li>
                        <br></br>
                    </ul>
                </div>
                <div style={{marginTop:"50px"}}>
                    <table style={{color:"blue",textAlign:"left"}}>
                        <th style={listheaderStyle}>&nbsp;&nbsp;&nbsp;&nbsp;Quick Links</th>
                        <tr style={listItemStyle}>&nbsp;&nbsp;&nbsp;&nbsp;1.Track Account Opening</tr>
                        <tr style={listItemStyle}>&nbsp;&nbsp;&nbsp;&nbsp;2.Track Segment Activation</tr>
                        <tr style={listItemStyle}>&nbsp;&nbsp;&nbsp;&nbsp;3.Intraday Margins</tr>
                        <tr style={listItemStyle}>&nbsp;&nbsp;&nbsp;&nbsp;4.KITE user Manual</tr>
                        <tr style={listItemStyle}>&nbsp;&nbsp;&nbsp;&nbsp;5.Learn how to create a ticket</tr>
                    </table>
                </div>
            </div>
        </div>
     );
}

export default Hero;