import { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Components/App.css";
import axios from "axios";
import logo from "../Components/logo.svg";

export default function Form() {
    // States for registration
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [idnumber, setIdnumber] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = '';
    const [message, setMessage] = useState("");
    //const salt = st10496014.genSaltSync(10);
    // example =>  $2a$10$CwTycUXq9StjUM0u => to be added always to the password hash

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    // Handling account details change
    const handleAddress = (e) => {
      setAddress(e.target.value);
      setSubmitted(false);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
        setSubmitted(false);
      };

    //Handling idnumber details change
    const handleIdnumber = (e) => {
      setIdnumber(e.target.value);
      setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "" || address === "" || idnumber === "") {
            setError(true);
        } else {

            e.preventDefault();
           // useEffect(() => {
            axios
              .post(`https://localhost:8012/api/register`, 
                            {email , password, name, address, city, department, idnumber},
                            {
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                              })
              .then((response) =>{
                //setMessage(`Payment: ${id}: has been confirmed`)
                setSubmitted(true)
                setName("");
                setEmail("");
                setAddress("");
                setAddress("");
                setCity("");
                setIdnumber("");
                setIdnumber("");
                setPassword("");
                setError(false);
                window.location.href = '/Login';
            }
              )
              .catch((error) => setMessage(error.message));
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>Customer {name} successfully registered!!</h1>
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
                <h3>Please enter all the required fields</h3>
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
                      <h1>Customer Registration</h1>
                 </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Full Name: </label>
                <div class="col-sm-10"></div>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    type="text"
                    autofocus
                /></div>
                <div className="flex flex-col mb-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email: </label>
                <div class="col-sm-10"></div>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                /></div>
                <div className="flex flex-col mb-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Address: </label>
                <div class="col-sm-10"></div>
                <input
                     onChange={handleAddress}
                     className="input"
                     value={address}
                     type="text"
                  /></div>
                 <div className="flex flex-col mb-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">City: </label>
                <div class="col-sm-10"></div>
                <input
                     onChange={handleCity}
                     className="input"
                     value={city}
                     type="text"
                  /></div>
                  <div className="flex flex-col mb-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">ID Number: </label>
                <div class="col-sm-10"></div>
                <input
                     onChange={handleIdnumber}
                     className="input"
                     value={idnumber}
                     type="number"
                  /></div>
                 <div className="flex flex-col mb-4">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Password: </label>
                <div class="col-sm-10"></div>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                /></div>
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
            {message && (
      <p className="text-green-500 mt-4">{message}</p>
    )}
        </div>
        </div>
        </div>
    );
}