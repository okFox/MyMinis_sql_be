const express = require('express');
const units = express.Router();
const client = require('../lib/client');

units.get ('/', async(req, res, next) => {
  try {
    const results = await client.query('SELECT * FROM units');
    return res.json(results.rows);
  } catch(err) {
    return next(err);
  }
});



module.exports = units;
