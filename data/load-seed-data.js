const client = require('../lib/client');
// import our seed data:
const paintsData = require('./paints.js');
const units = require('./units.js');
const modelsData = require('./models.js');

run();

async function run() {

  try {
    await client.connect();

    const paints = await Promise.all(
      paintsData.map(paint => {
        return client.query(`
                      INSERT INTO paints (name, formula)
                      VALUES ($1, $2)
                      RETURNING *;
                  `,
        [paint.name, paint.formula]);
      })
    );
    console.log(paints, 'entered');
    // const paint = paints[0].rows[0];

    // await Promise.all(
    //   modelsData.map(model => {
    //     return client.query(`
    //                 INSERT INTO models (name, coolFactor, owner_id)
    //                 VALUES ($1, $2, $3);
    //             `,
    //     [model.name, animal.coolFactor, user.id]);
    //   })
    // );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
