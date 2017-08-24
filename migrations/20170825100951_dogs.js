exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dogs', (table) => {
    table.increments('id')
    table.string('name')
    table.string('breed')
    table.string('age')
    table.string('colour')
  })
};

//user_id unique has to be entered or given via token and can not be null

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dog')
};
