var connection = require('./../config');
const bcrypt = require('bcrypt');

module.exports.register =function(req,res){
    var today = new Date();
    var hash = bcrypt.hashSync(req.body.password, 10);
    var emailregex = /\w+@\w+\.\w+/g; //regex for emails
    var numbersregex = new RegExp('^[0-9]+$'); //regex for numbers

    //var emailaddress = req.body.email;
    //var idnumber = req.body.idnumber;

    var users={
        "email":req.body.email,
        "password":hash,
        "name":req.body.name,
        "idnumber":req.body.idnumber,
        "address":req.body.address,
        "city":req.body.city,
        "department":req.body.department
    }

    //validate using regex patterns
    if (req.body.email.match(emailregex) && req.body.idnumber.match(numbersregex))
    {

      connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'user registered sucessfully'
          })
        }
      });

    } else 
         {
          res.json({
            status:false,
            message:'Invalid Input!!'
        })
         };
} 
