import React from "react";
import Navbar from '../Components/Navbar';
import FetchData from "./FetchData";
import VerifyPayments from "./VerifyPayments";

function Portal()
{
  
  return (
    <div className="container mx-auto mt-4">
      < Navbar />
       <h1>International Payment Portal</h1>
      <FetchData />
      <VerifyPayments />
    </div>
  );

  /*
  return (
    <div>
        < Navbar />
       <h1>International Payment Portal</h1>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  ); */
}
export default Portal 