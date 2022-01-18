import React from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Login from "./combonents/Login";
import Home from "./combonents/home";
import Food from "./combonents/Food";

export default function App() {
  let [logged, setLogged] = useState("");

 
if(localStorage.getItem("logined") == "yes"){
  return (
    <div style={{ backgroundimage: "" }}>

      <header>
        <div>
          
          <h4>Hand in hand let's continue</h4>
        </div>
        <div>
          <img  className="logo" src="https://files.slack.com/files-pri/T02FM3FE1DJ-F02UFTKG76F/logo.png"/>
          <h2>Takatof Project</h2>
        </div>
        <div>
          <ul>
            <li><Link className="active" to="/User">Register</Link>
            </li>
            <div class="dropdown">
              <li class="dropbtn"><Link to="/Services">Services</Link>  </li>
              <div class="dropdown-content">

              </div>
            </div>
            <div class="dropdown">
              <li class="dropbtn"><Link to="/Home">Home</Link>  </li>

            </div>
            <div class="dropdown">

              <li class="dropbtn"><Link to="" onClick={() => { localStorage.setItem("logined", "no"); setLogged((logged = "no")) }}>Logout</Link>
              </li>
            </div>

            
            


          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
} else{
  return (
    <div style={{ backgroundimage: "" }}>

      <header>
        <div>
          <h4>Hand in hand let's continue</h4>
        </div>
        <div>
          <h2>Takatof Project</h2>
        </div>
        <div>
          <ul>
            <li><Link className="active" to="/User">Register</Link>
            </li>
            <div class="dropdown">
              <li class="dropbtn"><Link to="/Services">Services</Link>  </li>
              <div class="dropdown-content">

              </div>
            </div>
            <div class="dropdown">
              <li class="dropbtn"><Link to="/Home">Home</Link>  </li>

            </div>
            <div class="dropdown">
              <li class="dropbtn"><Link to="/Login">Login</Link>
              </li>
            </div>


          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
}}