import React from "react";
import {Outlet, Link } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Login from "./combonents/Login";
import Home from "./combonents/home";

export default function App() {

  let [authenticate, setAuthenticate] = useState(false);

  function handleLogin() {
    setAuthenticate(true);
  }
  if (!authenticate) {
    return <div class="login"><Login handleLogin={handleLogin} /> </div>;
  }

  return (
    <div style={{backgroundimage:"kabsa.jpg"}}>
      {/* <h1 style={{ backgroundColor: ""
      }}>humanly</h1> */}
      <nav>
        <div class="header">
  <a href="<home/>" class="logo">Humanly</a>
  <div class="header-right">
      
    <Link className="active" to="/User">Register</Link>  
 
    <Link to="/Services">Services</Link>  

    <Link to="/Home">Home</Link>  
    <Link to="/Login">Login</Link>
    <hr/>
    <br/>
    

    
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
      <div className="AppImg">
      <Link to="/Addclothes"><img src="http://www.lahaonline.com/media/images/articles//ekhterak/2014_1513235969.jpg"/></Link>

      <Link to="/AddFood"><img src="https://www.sayidaty.net/sites/default/files/styles/600x380/public/30/10/2015/1446225292_1.png?itok=dOBp5DS-"/></Link>
    
      </div>
    </div>
  );
}