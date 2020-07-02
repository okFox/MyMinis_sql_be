const express = require('express');
const paints = express.Router();
const client = require('../lib/client');


paints.get ('/', async(req, res, next) => {
  try {
    const result = await client.query('SELECT * FROM paints');
    return res.json(result.rows);
  } catch(err) {
    return next(err);
  }
});

module.exports = paints;
