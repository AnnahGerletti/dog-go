exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {name: "Snowy", breed: "Terrier", age:"5", colour:"white", owner_id: "1"},
        {name: "Timmy", breed: "Terrier", age:"2", colour:"brown", owner_id: "2"}
      ]);
    });
};
