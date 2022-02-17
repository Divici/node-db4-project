
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl=>{
        tbl.increments('recipe_id')
        tbl.string('recipe_name',128).notNullable().unique()
    })
    .createTable('ingredients', tbl=>{
        tbl.increments('ingredient_id')
        tbl.string('ingredient_name',128).notNullable().unique()
        tbl.string('ingredient_unit', 50)
    })
    .createTable('steps', tbl=>{
        tbl.increments('step_id')
        tbl.string('step_instruction',250).notNullable()
        tbl.integer('step_number').notNullable()
        tbl.integer('recipe_id')
            .unsigned() 
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('restrict')
            .onUpdate('restrict')
    })
    .createTable('step_ingredients', tbl=>{
        tbl.increments('step_ingredient_id')
        tbl.float('quantity').notNullable()
        tbl.integer('step_id')
            .unsigned() 
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('restrict')
            .onUpdate('restrict')
        tbl.integer('ingredient_id')
            .unsigned() 
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('restrict')
            .onUpdate('restrict')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};