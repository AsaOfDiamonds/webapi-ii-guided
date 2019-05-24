const express = require('express');
const server = express();

const hubsRouter = require('./hubs/hubs-router');

server.use(express.json());
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Asa is the Best!!</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});



module.exports = server;
