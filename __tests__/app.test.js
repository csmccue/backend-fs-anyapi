const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { boats } = require('../lib/utils/boats-data');
const { countries } = require('../lib/utils/countries-data');


describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });



  it('/boats should return a list of boats with stats', async () => {
    const res = await request(app).get('/boats');
    const expected = boats.map((boat) => {
      return { id: boat.id, name: boat.name, type: boat.type };
    });
    expect(res.body).toEqual(expected);
  });

  it('/boats/id should return a boat with that id', async () => {
    const res = await request(app).get('/boats/1');
    const boat = {
      id: '1',
      name: 'USS Atlanta',
      type: 'Light Cruiser',
    };
    expect(res.body).toEqual(boat);
  });

  it('/boats/type should return a list of boats of that type', async () => {
    const res = await request(app).get('/boats/type/Carrier');
    const boat = {
      id: '3',
      name: 'USS Yorktown',
      type: 'Carrier'
    };
    expect(res.body).toEqual(boat);
  });

  it('/countries should return a list of countries with stats', async () => {
    const res = await request(app).get('/countries');
    const expected = countries.map((place) => {
      return { id: place.id, name: place.name, size: place.size };
    });
    expect(res.body).toEqual(expected);
  });

  it('/countries/id should return country with matching id', async () => {
    const res = await request(app).get('/countries/1');
    const place = {
      id: '1',
      name: 'United States',
      size: '300 million',
    };
    expect(res.body).toEqual(place);
  });


  afterAll(() => {
    pool.end();
  });
});
