let getHash = require('../server/lib/crypto').getHash
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 2, username: 'John', hash: getHash('password')},
        {id: 3, username: 'Tintin', hash: getHash('password')},
        {id: 4, username: 'Tom', hash: getHash('password')}
      ]);
    });
};
