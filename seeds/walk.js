
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walk').del()
    .then(function () {
      // Inserts seed entries
      return knex('walk').insert([
        {id: 1,location:"Nightingale Road", time: "12.30", status:"out", walker_id:"John", owner_id:"Tintin", dog_id:""}
      ]);
    });
};
