const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
  
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});