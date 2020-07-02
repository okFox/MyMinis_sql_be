const express = require('express');
const app = express();
const unitsRoutes = require('../routes/units');

app.use(express.json());
app.use(require('cors')({
  origin: true,
  credentials: true
}));


//import route files


//if you implement Router
// app.use('/api/v1/paints', require('../routes/paints'));
app.use('/api/v1/units', unitsRoutes);
// app.use('/api/v1/models'), require('../routes/models');

app.use(require('../lib/middleware/not-found'));
app.use(require('../lib/middleware/error'));

module.exports = app;
