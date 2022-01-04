import React from "react";
import {Outlet, Link } from "react-router-dom";
import './App.css'
export default function App() {
  return (
    <div style={{backgroundimage:"kabsa.jpg"}}>
      {/* <h1 style={{ backgroundColor: ""
      }}>humanly</h1> */}
      <nav
        // style={{
        //   borderBottom: "solid 1px",
        //   paddingBottom: "1rem",
        //   backgroundColor: "lightblue"
        // }}
      >
        <div class="header">
  <a href="#default" class="logo">Humanly</a>
  <div class="header-right">

    <Link className="active" to="/User">Register</Link>  
 
    <Link to="/Services">Services</Link>  

    <Link to="/Home">Home</Link>  
    <Link to="/Login">Login</Link>

  </div>
</div>
 
        {/* <Link to="/User">Register</Link>  |{" "}
        <Link to="/Services">Services</Link>  |{" "}
        <Link to="/Home">Home</Link>  |{" "}
        <Link to="/Login">Login</Link>|{" "} */}
        {/* <Link to="/Regestor">Regoster</Link>|{" "} */}
        {/* <Link to="/AddFood">AddFood</Link>|{" "}
        <Link to="/AddClothes">Addclothes</Link>|{" "}
        <Link to="/AddDevice">AddDevice</Link>|{" "} */}
      </nav>
      <Outlet/>
    </div>
  );
}