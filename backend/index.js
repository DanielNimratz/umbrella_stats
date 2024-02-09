const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser')
const path = require('node:path'); 

app.use(cors())

app.use(bodyParser.json());

const URL = 'https://www.random.org/integers/?num=1&min=0&max=100&col=1&base=10&format=plain&rnd=new';

async function makeRequest(URL) {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
}

app.get('/json', async (req, res) => {
  let randNum = await makeRequest(URL);
  res.status(200).send({num: randNum});
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});