import Navbar from '../Components/Navbar';
import { Component } from "react";
import "../Components/App.css";
import logo from "../Components/logo.svg";
//import Portal from './Portal';
import axios from 'axios';

class Portallogin extends Component
 { 
      handleClick = e => {
        e.preventDefault();
    
        alert("Goes to registration page");
        //navigate('/Portal');
        window.location.href = '/Registration';
      };

      handleChange = e => {
        console.log(e.target.checked);
        
      };

     loginUser = e => {  
      e.preventDefault();
      console.log(e.target.email.value);

      if (!e.target.email.value) 
      {
        alert("Email is required");
      } 
      else if (!e.target.email.value) 
      {
        alert("Valid email is required");
      } 
      else if (!e.target.password.value) 
      {
        alert("Password is required");
      } 
      else
      {

        //userData = {email: e.target.email.value,password: e.target.password.value};
        //.post("https://reqres.in/api/login", userData)
        axios.post('https://localhost:8012/api/authenticate', { email: e.target.email.value, password: e.target.password.value },
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //}).then((res) =>{
          //return res.json();
        }).then((resp) => {
          //setMessage(error.message);
          console.log('Status Code:', resp.status);
          console.log('Response Data:', resp.data);
          if ((resp.status ===200))
          { //alert(resp.data)
            if (e.target.color.checked){window.location.href = '/Portal';}
            else {window.location.href = '/Payment';}
          }
          else {alert(resp.message)}
        }
        )
        .catch((error) => {//alert(error.message) 
          if ((error.message) === 'undefined'){
          window.location.href = '/Registration';} 
        else {alert(error.message)} });
      }
    };

      render() {
        return (
          <div className="App">
            < Navbar />
            <img style={{ width: 300, height: 300 }} src={logo} className="logo" alt="Website Logo" />
            <form className="form" onSubmit={this.loginUser}>
              <div className="input-group">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" placeholder="you@yoemail.com" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
              </div>
              <div><label htmlFor="color">
               <input type="checkbox" name="color"  onChange={this.handleChange}/>
                 Employee
              </label></div>
              <button className="primary">Login</button>
            </form>
            <button className="secondary" onClick={this.handleClick}>
              Create a new account
            </button>
          </div>
        );
      }
    
   }

export default Portallogin; 