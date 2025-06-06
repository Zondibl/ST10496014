 // Home.js
 import React, { useState, useEffect } from 'react';
 import { Component } from "react";
 import Navbar from '../Components/Navbar';
 import logo from "../Components/logo.svg";
 import "../Components/App.css";
 
 function Home(){    
  
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('https://127.0.0.1:8012/')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);


    const centerDivStyle = {
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh'

  };
   return (
     <div> 
      <Navbar />
     <div style={centerDivStyle}>
            <img style={{width: 250, height: 250 }} src={logo} className="logo" alt="Website Logo" />
            <h1>
        Customer International Payment Portal
         </h1>
         <img style={{width: 250, height: 250 }} src={logo} className="logo" alt="Website Logo" />
         </div>
     </div>
   );
   }
 export default Home
