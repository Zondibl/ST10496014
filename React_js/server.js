const express = require('express');
const app = express();
const port = 8012;

const https = require('https')
const path = require('path')
const fs = require('fs')

app.get('/', (req, res) => {
  res.send('ST10496014 Node.js backend server = running!!');
});

/*app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});*/

const sslserver = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert','key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert','cert.pem')),
    },
    app
)
sslserver.listen(8012, () => console.log('Secure server on port 8012'))
//app.listen(8012);