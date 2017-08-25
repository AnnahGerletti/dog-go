function insertWalker (walker ,db) {
  return db ('walkers')
    .insert(walker)
}


function getWalkers(body, db){
  return db('walkers')
    .select()
}

function getWalker(db,id){
  return db('walkers')
    .where('id', id)
}


module.exports = {
   insertWalker,
   getWalkers,
   getWalker
}
