function insertDogs (dog ,db) {
  return db ('dogs')
    .insert(dog)
}


function getOwnerIdByUserId (user_id, db) {
  return db('owners').where('user_id', user_id).first()
}

function insertWithUserId(db, user_id, dog) {
  return getOwnerIdByUserId(user_id, db)
    .then(owner => {
      dog.owner_id = owner.id
      return db('dogs')
        .insert(dog)
    })
    .catch(err => console.log(err))
}
function getDogs(db){
  return db('dogs')
    .select('*')
}

function getDog(db,id){
  return db('dogs')
    .where('id', id)
}

module.exports = {
   insertDogs,
   getDogs,
   getDog,
   insertWithUserId,
   getOwnerIdByUserId
}
