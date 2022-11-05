const { Router } = require('express');
const Boat = require('../models/Boats');
const Boats = require('../models/Boats');

module.exports = Router()
  .get('/', async (req, res) => {
    const boats = await Boats.getAll();
    const filtered = boats.map(({ id, name, type }) => ({ id, name, type }));
    res.json(filtered);
  })

  .get('/boats/:type', async (req, res) => {
    const boats = await Boat.getType(req.params.type);
    const filtered = boats.map(({ type }) => ({ type }));
    res.json(filtered);
  });


