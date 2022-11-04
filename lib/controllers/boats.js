const { Router } = require('express');
const Boats = require('../models');

module.exports = Router()
  .get('/', async (req, res) => {
    const boats = await Boats.getAll();
    const filtered = boats.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
