const insertOwners = (owner ,db) => {
  return db('owners')
    .insert(owner)
}

function getOwners(owner, db){
  return db('owners')
    .select('*')
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
   getOwners,
   getOwner,
   getOwnerByUserId
}
