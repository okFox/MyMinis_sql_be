const client = require('../lib/client');

run();

async function run() {

  try {
    await client.connect();
    
    await client.query(`
            DROP TABLE IF EXISTS paints CASCADE;
            DROP TABLE IF EXISTS models CASCADE;
            DROP TABLE IF EXISTS units CASCADE;
            DROP TABLE IF EXISTS model_paint CASCADE;

        `);

    console.log('Tables dropped successfully.');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
