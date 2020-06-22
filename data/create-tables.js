const client = require('../lib/client');

run();

async function run() {

  try {

    await client.connect();

    await client.query(`
                CREATE TABLE paints (
                  id SERIAL PRIMARY KEY NOT NULL,
                  name VARCHAR(256) NOT NULL,
                  formula VARCHAR(256),
              );
                CREATE TABLE units (
                    id SERIAL PRIMARY KEY NOT NULL,
                    title VARCHAR(512),
                    faction VARCHAR(256),
                    game VARCHAR(256) NOT NULL,
                    painted BOOL DEFAULT false,
                    models TEXT[] REFERENCES models(id)
                );           
                CREATE TABLE models (
                    id SERIAL PRIMARY KEY NOT NULL,
                    name VARCHAR(512) NOT NULL,
                    url VARCHAR(1024),
                    paints_used  TEXT[] NOT NULL REFERENCES paints(id)
                );
        `);

    console.log('Tables created successfully.');
  }
  catch(err) {
    console.log(err);
  }
  finally {

    client.end();
  }

}
