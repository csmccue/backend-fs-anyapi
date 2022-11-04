const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { boats } = require('../lib/utils/boats-data');


describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it('/boats should return a list of boats with stats', async () => {
    const res = await request(app).get('/boats');
    const expected = boats.map((boat) => {
      return { id: boat.id, name: boat.name };
    });
    expect(res.body).toEqual(expected);
  });




  afterAll(() => {
    pool.end();
  });
});
