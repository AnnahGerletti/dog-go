const insertOwners = (owner ,db) => {
  return db('owners')
    .insert(owner)

  }

function getOwnerWithDog(owner, db){
  return db('owners')
    .join('dogs', 'dogs.owner_id', '=', 'owners.id')
    .select('owners.*', 'owners.name as owner_name')
    .select('dogs.*', 'dogs.name as dog_name')
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
   getOwnerByUserId
}
