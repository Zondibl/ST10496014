var connection = require('./../config');
//const bcrypt = require('bcrypt');

//module.exports.put
module.exports.confirmpayment =function(req,res){
    var today = new Date();
    //const doubleValue = parseFloat(req.body.amount);
    const intValue = parseInt(req.body.id);
    var numbersregex = new RegExp('^[0-9]+$'); //regex for numbers
    var verified = req.body.verified;
    //var verifieddt = today.getDate();
    
    // current timestamp in milliseconds
    let ts = Date.now();
    let date_time = new Date(ts);
    let date = date_time.getDate();
    let month = date_time.getMonth() + 1;
    let year = date_time.getFullYear();
    // prints date & time in YYYY-MM-DD format
    var verifieddt = year + "-" + month + "-" + date;

    //validate account no and swiftcode
    //, verifieddt = ? AND accountno = ?
    if (req.body.id.match(numbersregex) && req.body.accountno.match(numbersregex)){
    //connection.query('UPDATE payment SET verified ="'+ verified +'", verifieddt = "'+ verifieddt +'" WHERE id =' + req.body.id + ' AND accountno =' + req.body.accountno + '') ('/update', function(req, res)v
      connection.query('UPDATE payment SET verified = ?, verifieddt = ?  WHERE id = ?', [verified,verifieddt,intValue], (error, results) => {
        if (error) {
          res.json({
              status:false,
              data:results,
              error:error,
              message: 'there are some error with query'
          })
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Incorrect Payment ID, please try again!!' });
         }
        else{
            res.json({
              status:true,
              data:results,
              message:'Payment confirmed sucessfully'
          })
        }
      });
    }
    else 
    {
      res.json({
        status:false,
        message:'Invalid Account no or Transaction ID!!'
    })
    };
}