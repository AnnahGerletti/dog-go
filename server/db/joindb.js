// const getBooks = (db) => {
//  return db('users')
//    .join('owners', 'owners.id', '=', 'users.author_id')
//    .join('walkers', 'walkers.id', '=', 'users.genre_id')
//    .select('*')
// }

function getUsers(db){
  return db('users')
    .select('*')
}

function getUser(db,id){
  return db('users')
    .where('id', id)
}


module.exports = {
 getUsers,
 getUser
}
