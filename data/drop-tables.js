const client = require('../lib/client');

run();

async function run() {

  try {
    await client.connect();
    
    await client.query(`
            DROP TABLE IF EXISTS paints CASCADE;
            DROP TABLE IF EXISTS models CASCADE;
            DROP TABLE IF EXISTS units;
        `);

    console.log('Tables dropped sucessfully');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
