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

paints.post('/', async(req, res, next) => {
  try {
    const result = await client.query('INSERT INTO paints (name, formula) VALUES ($1, $2) RETURNING *', [req.body.name, req.body.formula]
    );
    return res.json(result.rows[0]);

  } catch(err) {
    return next(err);
  }
});

paints.patch('/:id', async(req, res, next) => {
  try {
    const result = await client.query('UPDATE paints SET name=$1, formula=$2 WHERE idpaint=$3 RETURNING *', [req.body.name, req.body.formula, req.params.id]
    );
    return res.json(result.rows[0]);

  } catch(err) {
    next(err);
  }
});

paints.delete('/:id', async(req, res, next) => {
  try {
    await client.query('DELETE from paints WHERE idpaint=$1', [req.params.id]);
    return res.json({ message: `Paint ${req.params.id} deleted successfully` });
  } catch(err) {
    next(err);
  }
});

module.exports = paints;
