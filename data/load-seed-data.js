const client = require('../lib/client');
// import our seed data:
const paintsData = require('./paints.js');
const unitsData = require('./units.js');
const modelsData = require('./models.js');
const refData = require('./model_paint.js');

run();

async function run() {

  try {
    await client.connect();

    await Promise.all(
      paintsData.map(paint => {
        return client.query(`
                      INSERT INTO paints (name, formula)
                      VALUES ($1, $2)
                      RETURNING *;
                  `,
        [paint.name, paint.formula]);
      })
    );
    console.log('paints entered');

    // const paint_id = paints[0].rows[0];

    await Promise.all(
      unitsData.map(unit => {
        return client.query(`
                    INSERT INTO units (title, faction, type, game, painted)
                    VALUES ($1, $2, $3, $4, $5);
                `,
        [unit.title, unit.faction, unit.type, unit.game, unit.painted]);
      })
    );

    console.log('units entered');
    

    await Promise.all(
      modelsData.map(model => {
        return client.query(`
                    INSERT INTO models (idunit, description, image)
                    VALUES ($1, $2, $3);
                `,
        [model.idunit, model.description, model.image]);
      })
    );
    console.log('models entered');

    await Promise.all(
      refData.map(ref => {
        return client.query(`
                    INSERT INTO model_paint (paint_id, unit_id)
                    VALUES ($1, $2);
                `,
        [ref.paint_id, ref.unit_id]);
      })
    );
    console.log('reference data entered');

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
