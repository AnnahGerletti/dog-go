
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 2, username: 'John', hash: '5f4dcc3b5aa765d61d8327deb882cf99'},
        {id: 3, username: 'Tintin', hash: '5f4dcc3b5aa765d61d8327deb882cf99'}
      ]);
    });
};
