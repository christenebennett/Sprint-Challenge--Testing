const server = require('./server');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('The server', () => {

  describe('GET /', () => {
    it('should return status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })
  })
})