
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('walkRequest', t =>{
    t.increments('id')
    t.integer('dog_id')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('walkRequest')
};
