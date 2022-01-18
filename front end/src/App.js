import React from "react";
import {Outlet, Link } from "react-router-dom";
import './App.css'
import { useState } from "react";
import Login from "./combonents/Login";
import Home from "./combonents/home";
import Food from "./combonents/Food";

export default function App() {

  // function Detel(){
  //   if(localStorage.setItem("logined","yes")){
  //       <Link to="/"><button onClick={handleSubmit} className='btn'>Login</button></Link>
  //   }
  //   else{
  //       <Link to="/"><button onClick={handleSubmit} className='btn'>Logout</button></Link>
  //   }




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
      
      {/* <nav>
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
      <div className="body"> */}
      
    {/* <img src="https://www.alwatan.com.sa/uploads/imported_images/31/16/73/dbsa.jpg"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuVn7LD2lno7ABfLINRoNWQU7v5zBRIIh0A&usqp=CAU"/> */}
      {/* </div> */}
      <header>
     <div>
         <h4>Winter Sale - Save 50%</h4>
     </div>
     <div>
         <h2>only one</h2>
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
<div class="dropdown">

<li class="dropbtn"><p onClick={()=>{localStorage.setItem("logined","no")}}>Logout</p>
</li></div>
                   
            </div>
         </ul>
     </div>
 </header>
 <Outlet/>
    </div>
  );
  }