
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walkRequest').del()
    .then(function () {
      // Inserts seed entries
      return knex('walkRequest').insert([
        {id: 1, dog_id: 1, created_at: knex.fn.now()}
      ]);
    });
};