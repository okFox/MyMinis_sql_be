require('dotenv').config();
// const fs = require('fs');

const pg = require('pg');

const Client = pg.Client;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
});

// export the client
module.exports = client;
