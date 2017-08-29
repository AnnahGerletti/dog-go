const insertOwners = (owner ,db) => {
  return db('owners')
    .insert(owner)

  }

function getDogsByUserId(user_id, db) {
  return db('owners').where('user_id', user_id).first()
    .then(owner => {
      if (!owner) return []
      return db('dogs')
        .where('owner_id', owner.id)
    })
}

function getOwnerWithDog(db){
  return db('owners')
    .join('dogs', 'dogs.owner_id', '=', 'owners.id')
    .select('owners.*', 'owners.name as owner_name')
    .select('dogs.*', 'dogs.id as dog_id', 'dogs.name as dog_name')
}

function getOwner(db, id){
  return db('owners')
    .where('id', id)
}

function getOwnerByUserId(db, id) {
  return db('owners')
    .where('user_id', id)
}


module.exports = {
   insertOwners,
   getOwnerWithDog,
   getOwner,
   getOwnerByUserId,
   getDogsByUserId
}
