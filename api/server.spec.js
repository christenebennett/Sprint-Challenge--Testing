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
    it('should return status 200', async () => {
      const res = await request(server).get('/games');
      expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
      const res = await request(server).get('/games');
      expect(res.type).toBe('application/json')
    })

    // it ('should return list of games', async () => {
    //   const res = await request(server).get('/games');
    //   expect(res.body).toEqual({ api: 'Welcome to the Games API!'})
    // })
  })


  
})