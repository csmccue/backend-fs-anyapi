const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { boats } = require('../lib/utils/boats-data');


describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it.skip('/boats should return a list of boats with stats', async () => {
    const res = await request(app).get('/boats');
    const expected = boats.map((boat) => {
      return { id: boat.id, name: boat.name, type: boat.type };
    });
    expect(res.body).toEqual(expected);
  });

  it.skip('/boats/type should return a list of boats of that type', async () => {
    const res = await request(app).get('/boats/Carrier');
    const carrier = {
      name: 'USS Yorktown',
      type: 'Carrier'
    };
    expect(res.body).toEqual(carrier);
  });

  it('/boats/id should return a boat with that id', async () => {
    const res = await request(app).get('/boats/1');
    const carrier = {
      id: '1',
      name: 'USS Atlanta',
      type: 'Light Cruiser',
    };
    expect(res.body).toEqual(carrier);
  });


  afterAll(() => {
    pool.end();
  });
});
