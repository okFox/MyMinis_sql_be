require('dotenv').config();
const client = require('./lib/client');

client.connect();
console.log('client connected');

const app = require('./lib/app');

const PORT = process.env.PORT || 6321;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
