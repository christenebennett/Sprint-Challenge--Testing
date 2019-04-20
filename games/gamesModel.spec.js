const Games = require('./gamesModel');
const db = require('../data/dbConfig');

describe('The Games Model', () => {

  describe('add()', () => {
    beforeEach(() => {
      return db('games').truncate();
    })
    it('should insert a game into the database', async () => {
      await Games.add(
        {
        title: 'Pacman', 
        genre: 'Arcade', 
        releaseYear: 1980
      })
      const games = await db('games');
      expect(games.length).toBe(1);
    })
  })
})