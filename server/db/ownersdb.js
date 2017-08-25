const insertOwners = (owner ,db) => {
  return db ('owners')
    .insert(owner)
}


function getOwners(db){
  return db('owners')
    .select('*')
}

function getOwner(db,id){
  return db('owners')
    .where('id', id)
}


module.exports = {
   insertOwners,
   getOwners,
   getOwner
}
