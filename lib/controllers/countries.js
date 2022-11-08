const { Router } = require('express');
const Country = require('../models/Countries');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const place = await Country.getCountryByID(req.params.id);
    res.json(place);
  })

  .get('/', async (req, res) => {
    const places = await Country.getAllCountries();
    const filtered = places.map(({ id, name, size }) => ({ id, name, size }));
    res.json(filtered);
  })
  
;
