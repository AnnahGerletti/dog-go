const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

function insertWalker (walker ,testdb) {
  //console.log('walker 1', walker);
  const connection = knex
  return connection('walkers')
    .select()
    .insert(walker)
}
// function create (username, password, testDb) {
//   const hash = crypto.getHash(password)
//   const connection = testDb || knex
//
//   return connection('users')
//     .insert({
//       username: username,
//       hash: hash
//     })
// }

function getWalkers(body, db){
  const connection = db || knex
  return connection('walkers')
    .select()
}

function getWalker(id, db){
  return db('walkers')
    .where('id', id)
}


module.exports = {
   insertWalker,
   getWalkers,
   getWalker
}
