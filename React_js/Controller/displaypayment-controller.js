var connection = require('./../config');
var express=require("express");
var app = express();

app.get("/api/payment/display",async (req,rest)=>{

  connection.query('SELECT * FROM payment',(err,result,fields) => {
     if (err){
      rest.send('Error');
      console.log(err);
      return rest.status(400).send();
     }else {
      rest.status(200).json(result);
      //rest.send(result);
     }
  });
});