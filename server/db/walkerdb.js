function insertWalker (walker ,db) {
  return db('walkers')
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
  return db('walkers')
    .select('*')
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
