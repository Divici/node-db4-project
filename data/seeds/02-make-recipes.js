const recipes = [
    {recipe_name: 'Mac n Cheese'},
    {recipe_name: 'Pasta Bulgogi'},
    {recipe_name: 'Chicken Curry'},
]

const ingredients = [
    {ingredient_name: 'Cheese', ingredient_unit: 'lbs'},
    {ingredient_name: 'Chicken', ingredient_unit: 'ozs'},
    {ingredient_name: 'Soy Sauce', ingredient_unit: 'ozs'},
    {ingredient_name: 'Pasta', ingredient_unit: 'lbs'},
    {ingredient_name: 'Broccoli', ingredient_unit: 'grams'},
    {ingredient_name: 'Peppers', ingredient_unit: 'grams'},
]

const step_ingredients = [
   // Mac n Cheese
   {step_id: 2, ingredient_id:1, quantity: 2},
   {step_id: 3, ingredient_id:4, quantity: 3},
   {step_id: 3, ingredient_id:6, quantity: 10},
   // Pasta Bulgogi
   {step_id: 5, ingredient_id:2, quantity: 16},
   {step_id: 6, ingredient_id:3, quantity: 2},
   {step_id: 6, ingredient_id:4, quantity: 1},

   // Chicken Curry
   {step_id: 7, ingredient_id:5, quantity: 10},
   {step_id: 7, ingredient_id:6, quantity: 10},
   {step_id: 8, ingredient_id:4, quantity: 1},
   {step_id: 9, ingredient_id:2, quantity: 12},
]

const steps = [
    // Mac n Cheese
    {step_instruction: 'Heat saucepan', step_number: 1, recipe_id: 1},
    {step_instruction: 'Make the cheese sauce', step_number: 2, recipe_id: 1},
    {step_instruction: 'Mix Pasta with the cheese sauce and peppers', step_number: 3, recipe_id: 1},
    // Pasta Bulgogi
    {step_instruction: 'Heat up grill', step_number: 1, recipe_id: 2},
    {step_instruction: 'cook chicken strips to perfection', step_number: 2, recipe_id: 2},
    {step_instruction: 'Add soy sauce and mix with pasta in bowl', step_number: 3, recipe_id: 2},
    // Chicken Curry
    {step_instruction: 'Prepare curry on side', step_number: 1, recipe_id: 3},
    {step_instruction: 'cook pasta and set aside', step_number: 2, recipe_id: 3},
    {step_instruction: 'cook chicken', step_number: 3, recipe_id: 2},
    {step_instruction: 'mix meat into sauce and pasta', step_number: 4, recipe_id: 3},
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
};