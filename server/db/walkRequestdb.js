function requestWalk(dog_id, db) {
  return db('walkRequest')
    .insert({dog_id})
}

function getWalkRequest(db) {
  return db('walkRequest')
    .join('dogs', 'dogs.id', '=', 'walkRequest.dog_id' )
    .select('dogs.*','dogs.name as dog_name')
    .join('owners', 'owners.id', '=', 'dogs.owner_id' )
    .select('owners.*','owners.name as owner_name')
    .select('*')
}

// function getAllWalkRequest(db) {
//   return db('walkRequest')
//     .select()
// }

module.exports = {
  requestWalk,
  getWalkRequest
}


// const getBooks = (db) => {
//  return db('users')
//    .join('owners', 'owners.id', '=', 'users.author_id')
//    .join('walkers', 'walkers.id', '=', 'users.genre_id')
//    .select('*')
// }
