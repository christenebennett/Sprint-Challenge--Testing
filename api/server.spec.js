const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('The server', () => {

  describe('GET /', () => {
    it('should return status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json')
    })

    it ('should return { api: "Welcome to the Games API!"}', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'Welcome to the Games API!'})
    })
  })

  describe('GET /games', () => {
    beforeEach(() => {
      return db('games').truncate();
    })
    it('should return status 200', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/games');
      expect(res.type).toBe('application/json')
    })

    it ('should return list of games', async () => {
      const body = { 
        title: 'Mortal Kombat',
        genre: 'Fighting'
      }
      await request(server).post('/games').send(body);
      const res = await request(server).get('/games');
      expect(res.body.length).toBe(1)
    })
  })

  describe('POST /games', () => {
    beforeEach(() => {
      return db('games').truncate();
    })
    
    it('should return status 201 when body is correct', async () => {
      const body = { 
        title: 'Mortal Kombat',
        genre: 'Fighting',
        releaseYear: 1992
      }
      const res = await request(server).post('/games').send(body);
      expect(res.status).toBe(201);
    })
    
    it('should return status 201 when body does not contain release year', async () => {
      const body = { 
        title: 'Mortal Kombat',
        genre: 'Fighting'
      }
      const res = await request(server).post('/games').send(body);
      expect(res.status).toBe(201);
    })

    it('should return status 422 when body is not complete', async () => {
      const body = { 
        title: 'Mortal Kombat'
      }
      const res = await request(server).post('/games').send(body);
      expect(res.status).toBe(422);
    })
  })
})