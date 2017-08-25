const insertDogs = (dog ,db) => {
  return db ('dogs')
    .insert(dog)
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
   getDog
}
