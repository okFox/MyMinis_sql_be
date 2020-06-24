const express = require('express');
const app = express();

app.use(express.json());
app.use(require('cors')({
  origin: true,
  credentials: true
}));

app.use('/api/v1/paints', require('./routes/paints'));
app.use('/api/v1/units'), require('./routes/units');
app.use('/api/v1/models'), require('./routes/models');

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
