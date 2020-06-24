const db = require('../db');
const express = require('express');
const app = express();

//https://node-postgres.com/guides/project-structure

app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM paints WHERE id = $1', [req.params.id], (err, res) => {
    if(err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
});
