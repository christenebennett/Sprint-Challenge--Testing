const express = require('express');

const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());


server.get('/', (req,res) => {
  res.status(200).json({ api: 'Welcome to the Games API!'})
})





module.exports = server;