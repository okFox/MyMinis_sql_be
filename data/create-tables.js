const client = require('../lib/client');

run();

async function run() {

  try {

    await client.connect();

    await client.query(`
    CREATE TABLE paints (
                  idpaint SERIAL PRIMARY KEY,
                  name VARCHAR(256) NOT NULL,
                  formula VARCHAR(256)
              );
              CREATE TABLE units (
                idunit SERIAL PRIMARY KEY,
                title VARCHAR(512),
                faction VARCHAR(256),
                type TEXT[],
                game VARCHAR(256) NOT NULL,
                painted BOOL DEFAULT false
              ); 
              CREATE TABLE models (
                idunit INTEGER REFERENCES units(idunit),
                description VARCHAR(512) NOT NULL,
                image TEXT
              );
              CREATE TABLE model_paint (
                paint_id INTEGER,
                unit_id INTEGER,
                FOREIGN KEY (paint_id) REFERENCES paints (idpaint),
                FOREIGN KEY (unit_id) REFERENCES units (idunit),
                PRIMARY KEY (paint_id, unit_id)
              )
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


          
