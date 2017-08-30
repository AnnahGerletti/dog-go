function insertWalker (walker ,db) {
  return db('walkers')
    .select()
    .insert(walker)
}

function getWalkers(db){
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
