var connection = require('./../config');
//const bcrypt = require('bcrypt');

module.exports.payment =function(req,res){
    var today = new Date();
    const doubleValue = parseFloat(req.body.amount);
    const intValue = parseInt(req.body.custid);
    var numbersregex = new RegExp('^[0-9]+$'); //regex for numbers

    //var accno = req.body.accountno;
    //var swiftc = req.body.swiftcode;

    var users={
        "custid":intValue,
        "accountno":req.body.accountno,
        "amount":doubleValue,
        "currency":req.body.currency,
        "swift":req.body.swift,
        "swiftcode":req.body.swiftcode,
        "paymentdt":today
    }

    //validate account no and swiftcode
    if (req.body.accountno.match(numbersregex) && req.body.swiftcode.match(numbersregex)){

      connection.query('INSERT INTO payment SET ?',users, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'Payment registered sucessfully'
          })
        }
      });
    }
    else 
    {
      res.json({
        status:false,
        message:'Invalid Account no or swift code!!'
    })
    };
} 