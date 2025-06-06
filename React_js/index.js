var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var connection = require('./config');

const https = require('https')
const path = require('path')
const fs = require('fs')
const cors = require('cors');

var authenticateController=require('./controller/authenticate-controller');
var registerController=require('./controller/register-controller');
var paymentController=require('./controller/payment-controller');
var displaypaymentController=require('./controller/displaypayment-controller');
var confirmpayment=require('./controller/confirmpayment-controller');
//var confirmpayment=require('./controller/test-controller');
//var loginController=require('./Login');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
    res.send('Hello from the Node.js backend!');
  });
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/payment',paymentController.payment);
app.put('/api/confirmpayment/:id',confirmpayment.confirmpayment);
app.get('/api/payment/display',(req,rest)=>{
    connection.query('SELECT * FROM payment',(err,result)=>{
       if (err){
        rest.send('Error');
       }else {
        rest.send(result);
       }
    });
});

const sslserver = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert','key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert','cert.pem')),
    },
    app
)
sslserver.listen(8012, () => console.log('Secure server on port 8012'))
//app.listen(8012);