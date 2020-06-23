require('dotenv').config();
// const fs = require('fs');
// ca: fs.readFileSync('/Users/sarahmayfield/DevProjects/MyMinis/rootca.cer').toString(),
// key: fs.readFileSync('/Users/sarahmayfield/DevProjects/MyMinis/server.crt').toString(),
// cert: fs.readFileSync('/Users/sarahmayfield/DevProjects/MyMinis/server.key').toString(),

const pg = require('pg');


const config = {
  ssl: {
    rejectUnauthorized: false
  },
  connectionString: process.env.DATABASE_URL
};

const Client = pg.Client;

const client = new Client(config);

module.exports = client;
