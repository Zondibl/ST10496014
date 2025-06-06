var connection = require('./../config');
const bcrypt = require('bcrypt');

module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
        res.status(400).json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
          bcrypt.compare(password, results[0].password, function(err, ress) {
              if(!ress){
                res.status(401).json({
                    status:false,                  
                    message:"Email and password does not match"
                  });
              }else{                    
                res.status(200).json({
                      status:true,
                      message:"Successfully Login"
                  })
              }
          });         
      }
        else{
          res.status(403).json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}