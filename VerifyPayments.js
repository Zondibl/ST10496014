import React, { useState } from "react";
import axios from "axios";
import Navbar from '../Components/Navbar'

const SendData = () => {
  const [verified, setName] = useState("");
  const [accountno, setAccountno] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [data,setData]=useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://localhost:8012/api/confirmpayment/${id}`, { id, verified, accountno},
      {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .then((response) =>{
        //setMessage(error.message);
        setMessage(`Payment: ${id}: has been verified`)
      }
      )
      .catch((error) => setMessage(error.message));

    setName("");
    setId("");
    setAccountno("");
  };

  return ( 
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            Payment ID : 
          </label>
          <input
            type="number"
            id="name"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border border-gray-400 py-2 px-3"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="id" className="mb-2">
            Account Number:
          </label>
          <input
            type="number"
            id="id"
            value={accountno}
            onChange={(e) => setAccountno(e.target.value)}
            className="border border-gray-400 py-2 px-3"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="id" className="mb-2">
            Verify:
          </label>
          <input
            type="text"
            id="id"
            value={verified}
            placeholder="Y {for verified}"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 py-2 px-3"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Submit
        </button>
     </form>
    {message && (
      <p className="text-green-500 mt-4">{message}</p>
    )}
</div>
);
};

export default SendData;