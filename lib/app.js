const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const unitsRoutes = require('../routes/units');

app.use(express.json());
app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api/v1/paints', require('../routes/paints'));
app.use('/api/v1/units', require('../routes/units'));
// app.use('/api/v1/models'), require('../routes/models');

app.use(require('../lib/middleware/not-found'));
app.use(require('../lib/middleware/error'));

module.exports = app;
