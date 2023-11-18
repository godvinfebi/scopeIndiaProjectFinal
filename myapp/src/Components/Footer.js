import React from 'react'
import {  NavLink} from "react-router-dom";

function Footer() {
  return (
    <div>
    <div style={{backgroundColor:'#051a69'}}>
    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',paddingTop:'10%', width: '50%' }} src="https://scopeindia.org/images/snowpark-footer-logo.png" alt="scope" />
    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',paddingBottom:'2%', width: '30%' }} src='https://scopeindia.org/images/iso_iaflogo.png' alt="Globe"></img>
   <p style={{color:'white',textAlign:'center'}}>All Rights Reserved Suffix E Solutions © 2007-2023</p>
  
   
      <div style={{textAlign:'center',display:'flex'}} className="navbar-nav ">
        <NavLink  className="nav-link active text-light" aria-current="page" to="/">9745936073 (TVM)</NavLink>
        <NavLink  className="nav-link text-light" to="/about">7592939481 (EKM)</NavLink>
        <NavLink  className="nav-link text-light" to="/contact">8075536185 (NGL)</NavLink>
        <NavLink  className="nav-link text-light" to="/info@scopeindia.org">info@scopeindia.org</NavLink>
      </div>
    </div>

    
    </div>
  )
}

export default Footer
