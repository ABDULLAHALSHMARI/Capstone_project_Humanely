import React from "react";
import {Outlet, Link } from "react-router-dom";
import expenses from "./combonents/User"
export default function App() {
  return (
    <div>
      <h1>huminly</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/User">Regestor</Link>
      </nav>
      <Outlet/>
    </div>
  );
}