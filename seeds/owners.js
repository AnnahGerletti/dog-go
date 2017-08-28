exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {id: 1, name: "Tintin", address: "26 Labrador Road", phone:"555-5526", postCode:"6011", email:"tintin@example.com", user_id:"3"}
      ]);
    });
};
