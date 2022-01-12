import React from "react";
import {Outlet, Link } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Login from "./combonents/Login";
import Home from "./combonents/home";
import Food from "./combonents/Food";

export default function App() {

//   let [authenticate, setAuthenticate] = useState(false);

//  let usery= sessionStorage.setItem("enter", {handleLogin});
  
//   function handleLogin() {
//     setAuthenticate(true);
//   }
//   if (!authenticate) {
//     return <div class="login"><Login handleLogin={handleLogin} /> </div>;
//   }

//   function (event){
//     setAuthenticate(true)
//     if  (!authenticate){
    
//         return(<Food/>);
//     }
//     else{}
// }

  return (
    <div style={{backgroundimage:""}}>
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
    <button onClick={()=>{localStorage.setItem("logined","no")}}>Logout</button>
    <hr/>
    <br/>
    

   
  </div>
</div>

      </nav>
      <Outlet/>
      <div className="body">
      
    {/* <img src="https://www.alwatan.com.sa/uploads/imported_images/31/16/73/dbsa.jpg"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuVn7LD2lno7ABfLINRoNWQU7v5zBRIIh0A&usqp=CAU"/> */}
      </div>
    </div>
  );
}
