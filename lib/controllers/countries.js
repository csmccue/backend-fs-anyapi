const { Router } = require('express');
const Country = require('../models/Countries');

module.exports = Router()
  .get('/countries', async (req, res) => {
    const places = await Country.getAll();
    const filtered = places.map(({ id, name, size }) => ({ id, name, size }));
    res.json(filtered);
  })
;
