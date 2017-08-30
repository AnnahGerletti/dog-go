let getHash = require('../server/lib/crypto').getHash
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Harrison', hash: getHash('Harrison')},
        {username: 'John', hash: getHash('password')},
        {username: 'Tintin', hash: getHash('password')},
        {username: 'Tom', hash: getHash('password')}
      ]);
    });
};
