import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{borderBottom:"1px solid #f0f0f0",background:"white"}} height="35">
  <div className="container-fluid">
    <Link className="navbar-brand" style={{margin:"10px",marginLeft:"200px"}} to="/"><img src='media/images/logo.svg' height={20} alt="Logo"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown" style={{marginRight:"200px"}}>
      <ul className="navbar-nav">
        <li class="nav-item" style={{paddingRight:"25px"}}>
          <Link class="nav-link" aria-current="page" to="/Signup">Signup</Link>
        </li>
        <li class="nav-item" style={{paddingRight:"25px"}}>
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item " style={{paddingRight:"25px"}}>
          <Link class="nav-link" to="/Products">Products</Link>
        </li>
        <li class="nav-item" style={{paddingRight:"25px"}}>
          <Link class="nav-link" to="/Pricing">Pricing</Link>
        </li>
        <li class="nav-item"style={{paddingRight:"25px"}}i24>
          <Link class="nav-link" to="/Support">Support</Link>
        </li>
        <li class="nav-item" style={{marginLeft:"5px",marginTop:"7px"}}>
          <i class="fa-solid fa-bars"></i>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default Navbar;