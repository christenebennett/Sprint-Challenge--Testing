const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());


server.get('/', (req,res) => {
  try {
    res.status(200).json({ api: 'Welcome to the Games API!'})
  } catch (error) {
    res.status(500).json({err: error})
  }
})

server.get('/games', async (req,res) => {
  try {
    const games = await Games.getAll();
    res.status(200).json(games)
  } catch (error) {
    res.status(500).json({err: 'Something happened while retrieving the games.'})
  }
})


module.exports = server;