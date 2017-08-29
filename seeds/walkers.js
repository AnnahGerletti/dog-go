
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walkers').del()
    .then(function () {
      // Inserts seed entries
      return knex('walkers').insert([
        {id: 1, name: "John", address: "26 Devon St", phone:"555-5555", postCode:"6011", email:"John@example.com",lat:"-41.294080",lng:"174.766934",  user_id:""}
      ]);
    });
};
