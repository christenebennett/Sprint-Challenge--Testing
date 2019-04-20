const db = require('../data/dbConfig');

module.exports = {
  getAll,
  add,
}

function getAll() {
  return db('games');
}

async function add(game) {
  return await db('games').insert(game);
}