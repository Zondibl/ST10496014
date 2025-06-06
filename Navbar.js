import React from 'react';
import './Navbar.css';
import {Link } from 'react-router-dom';

//import '../Components/Navbar.css';
// <li><Link to="/Portal">Int. Pay Portal</Link></li>
//<li><Link to="/Payment">Payment Portal</Link></li>

function Navbar()
{
  return (
   <div className='navbar'>
      <div className='navbar-logo'>
           APDS7311 ST10496014 
      </div>
      <ol className='navbar-Menu'>
        <li><Link to="/Registration">Registration</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
      </ol>
   </div>

  )

}

export default Navbar 