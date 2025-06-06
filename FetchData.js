import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    axios
      .get("https://localhost:8012/api/payment/display")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleRadioChange = (event) => {
    console.log('Selected value:', event.target.value);
    setCheckedItems(event.target.value);
    //onChange(event);
    // You can store the selected value in another state variable if needed
  };

  const centerDivStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '100vh'

};

  return (
    
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">IPM:</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">CustID</th>
            <th className="px-4 py-2">AccountNo</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Currency</th>
            <th className="px-4 py-2">Swift</th>
            <th className="px-4 py-4">SwiftCode</th>
            <th className="px-4 py-4">PaymentDate</th>
            <th className="px-4 py-2">Verified</th>
            <th className="px-4 py-2">VerifiedDate</th>
            <th className="px-4 py-2">Verify Payment</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.custid}</td>
              <td className="border px-4 py-2">{user.accountno}</td>
              <td className="border px-4 py-2">{user.amount}</td>
              <td className="border px-4 py-2">{user.currency}</td>
              <td className="border px-4 py-2">{user.swift}</td>
              <td className="border px-4 py-2">{user.swiftcode}</td>
              <td className="border px-4 py-2">{user.paymentdt}</td>
              <td className="border px-4 py-2">{user.verified}</td>
              <td className="border px-4 py-2">{user.verifieddt}</td>
              <td className="border px-4 py-2">
              <input
                type="radio"
                name="verifypayment"
                value={user.id}
                //checked={checkedItems === user.id}
                onChange={handleRadioChange}
                />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default FetchData;