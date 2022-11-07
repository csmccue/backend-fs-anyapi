const { Router } = require('express');
const Boat = require('../models/Boats');

module.exports = Router()

  .get('/:id', async (req, res) => {
    const boats = await Boat.getByID(req.params.id);
    const filtered = boats.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })

  .get('/:type', async (req, res) => {
    const boats = await Boat.getType(req.params.type);
    const filtered = boats.map(({ id, name, type }) => ({ id, name, type }));
    res.json(filtered);
  })
  
  .get('/', async (req, res) => {
    const boats = await Boat.getAll();
    const filtered = boats.map(({ id, name, type }) => ({ id, name, type }));
    res.json(filtered);
  })
;


