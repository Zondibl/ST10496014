import React from 'react'
import { useState } from "react";
import Navbar from '../Components/Navbar'
import "../Components/App.css";
import axios from "axios";
import logo from "../Components/logo.svg";
//import { render } from 'react-dom';

export default function Form() {
    // States for registration
    const [paymentdt, setPaymentdt] = useState("2025-06-05"); 
    const [verified, setVerified] = useState("");
    const [verifieddt, setVerifieddt] = useState("");
    const [accountno, setAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [swift, setSwift] = useState("");
    const [swiftcode, setSwiftCode] = useState("");
    const [custid, setCustID] = useState("");
    const [message, setMessage] = useState("");
    //const salt = st10496014.genSaltSync(10); { account }, { amount }, { currency }, { swift }, { swiftcode }, {custid}
    // example =>  $2a$10$CwTycUXq9StjUM0u => to be added always to the password hash


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleAccountNumber = (e) => {
        setAccount(e.target.value);
        setSubmitted(false);
    };

    // Handling the name change
    const handleAmount = (e) => {
        setAmount(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleCurrency = (e) => {
        setCurrency(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleSwift = (e) => {
        setSwift(e.target.value);
        setSubmitted(false);
    };
    // Handling account details change
    const handleSwiftCode = (e) => {
      setSwiftCode(e.target.value);
      setSubmitted(false);
    }
    //Handling idnumber details change
    const handleCustID = (e) => {
      setCustID(e.target.value);
      setSubmitted(false);
    }

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (accountno === "" || amount === "" || currency === "" || swift === "" || swiftcode === "" || custid === "") {
            setError(true);
        } else {

            e.preventDefault();
            axios.post(`https://localhost:8012/api/payment`, 
            {accountno, amount, currency, swift, swiftcode, custid, paymentdt, verified, verifieddt},
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              } )
              .then((response) =>
                //setMessage(`Payment: ${id}: has been confirmed`);
                //setSubmitted(true);
                alert("Payment Made")
              )
              .catch((error) => {
               if (error.response)
               {setMessage(error);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
               }
               else if (error.reponse)
                  {console.log(error.response.status);}
               });
               
        
            /*setAccount("");
            setAmount("");
            setCurrency("");
            setSwift("");
            setSwiftCode("");
            setCustID("");
            setError(false);*/
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}            >
                <h1>Payment successfully captured!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h3>All fields are required...</h3>
            </div>
        );
    };

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
            <div className="form">
                <div>
                    <h1>Payment Portal</h1>
                </div>
    
                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
    
                <form>
                    {/* Labels and inputs for form data */}
                    {message.length > 0 ? message : ""}
                    <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Account Number : </label>
                    <div class="col-sm-10"></div>
                    <input
                        onChange={handleAccountNumber}
                        className="input"
                        value={accountno}
                        type="number"
                        autofocus 
                    /></div>
                    <div className="flex flex-col mb-4">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Amount : </label>
                    <div class="col-sm-10"></div>
                    <input
                        onChange={handleAmount}
                        className="input"
                        value={amount}
                        type="number"
                    /></div>
                    <div className="flex flex-col mb-4">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency : </label>
                    <div class="col-sm-10"></div>
                    <input
                         onChange={handleCurrency}
                         className="input"
                         value={currency}
                         type="text"
                      /></div>
                      <div className="flex flex-col mb-4">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Swift : </label>
                    <div class="col-sm-10"></div>
                    <input
                         onChange={handleSwift}
                         className="input"
                         value={swift}
                         type="text"
                      /></div>
                      <div className="flex flex-col mb-4">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Swift Code : </label>
                    <div class="col-sm-10"></div>
                    <input
                        onChange={handleSwiftCode}
                        className="input"
                        value={swiftcode}
                        type="number"
                    /></div>
                     <div className="flex flex-col mb-4">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Cust ID : </label>
                    <div class="col-sm-10"></div>
                    <input
                        onChange={handleCustID}
                        className="input"
                        value={custid}
                        type="number"
                    /></div>
                    <button onClick={handleSubmit} className="btn" type="submit">
                        Pay Now
                    </button>
                    {message.length > 0 ? message : ""}
                </form>
                {message.length > 0 ? message : ""}
            </div>
            </div>
            </div>
        );
    
    

} 