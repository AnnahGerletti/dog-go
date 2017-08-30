exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {name: "Tintin", address: "26 Holloway Road", phone:"555-5526", postCode:"6011", email:"tintin@example.com", lat:"-41.293459", lng:"174.760494", user_id:"3"},
        {name: "Tom", address: "178 Wakefield St", phone:"555-5526", postCode:"6011", email:"tom@example.com", lat:"-41.291173", lng:"174.779133", user_id:"4"}

      ]);
    });
};
