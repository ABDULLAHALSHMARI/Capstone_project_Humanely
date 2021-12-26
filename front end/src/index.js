import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import User from './combonents/User';
import Food from './combonents/Services';
import Home from './combonents/home'
import Services from './combonents/Services';
import Login from './combonents/Login';
import Regestor from './combonents/Regestor';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="User" element={<User/>} />
          <Route path="Services" element={<Services />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />}/>
          <Route path="Regestor" element={<Regestor/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));

