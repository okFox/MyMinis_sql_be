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

units.post('/', async(req, res, next) => {
  try {
    const result = await client.query('INSERT INTO units (title, faction, type, game, painted) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.body.title, req.body.faction, req.body.type, req.body.game, req.body.painted]
    );
    return res.json(result.rows[0]);

  } catch(err) {
    return next(err);
  }
});

units.patch('/:id', async(req, res, next) => {
  try {
    const result = await client.query('UPDATE units SET title=$1, faction=$2, type=$3, game=$4, painted=$5 WHERE idunit=$6 RETURNING *',
      [req.body.title, req.body.faction, req.body.type, req.body.game, req.body.painted, req.params.id]
    );
    return res.json(result.rows[0]);

  } catch(err) {
    return next(err);
  }
});

units.delete('/:id', async(req, res, next) => {
  try {
    await client.query('DELETE from units WHERE idunit=$1', [req.params.id]);
    return res.json({ message: `Unit ${req.params.id} deleted successfully` });
  } catch(err) {
    return next(err);
  }
});

module.exports = units;
