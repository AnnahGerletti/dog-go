
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walkers').del()
    .then(function () {
      // Inserts seed entries
      return knex('walkers').insert([
        {id: 1, name: "John", address: "123 Square Rd", phone:"555-5555", postCode:"6011", email:"John@example.com", user_id:"2"}
      ]);
    });
};
