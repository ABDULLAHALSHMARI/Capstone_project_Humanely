import React from "react";
import {Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>humanly</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
 
        <Link to="/User">Register</Link>  |{" "}
        <Link to="/Services">Services</Link>  |{" "}
        <Link to="/Home">Home</Link>  |{" "}
        <Link to="/Login">Login</Link>|{" "}
        <Link to="/Regestor">Regoster</Link>|{" "}
        <Link to="/AddFood">AddFood</Link>|{" "}
      </nav>
      <Outlet/>
    </div>
  );
}