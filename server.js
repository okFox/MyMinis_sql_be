require('dotenv').config();

const client = require('./lib/client');

// Initiate database connection
client.connect();
console.log('client connected');



const app = require('./lib/app');

const PORT = process.env.PORT || 6321;

// app.get('/paints', async(req, res) => {
//   const data = await client.query('SELECT * from paints');

//   res.json(data.rows);
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
