const { Router } = require('express');
const Boat = require('../models/Boats');

module.exports = Router()
  .get('/', async (req, res) => {
    const boats = await Boat.getAll();
    const filtered = boats.map(({ id, name, type }) => ({ id, name, type }));
    res.json(filtered);
  })

  .get('/boats/:id', async (req, res) => {
    const boat = await Boat.getType(req.params.id);
    res.json(boat);
  })

  .get('/boats/:type', async (req, res) => {
    const boat = await Boat.getType(req.params.type);
    res.json(boat);
  });


