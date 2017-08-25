exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('walk', (table) => {
    table.increments('id')
    table.string('location')
    table.string('time')
    table.string('status')
    table.string('walker_id')
    table.string('owner_id')
    table.string('dog_id')
  })
};

//user_id unique has to be entered or given via token and can not be null

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('walk')
};
