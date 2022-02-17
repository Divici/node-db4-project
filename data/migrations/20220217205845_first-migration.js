
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments('recipes_id')
    })
    .createTable('ingredients', tbl=>{
        tbl.increments('ingredients_id')
    })
    .createTable('steps', tbl=>{
        tbl.increments('steps_id')
    })
    .createTable('step_ingredients', tbl=>{
        tbl.increments('step_ingredients_id')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
