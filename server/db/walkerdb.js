function insertWalker (walker ,db) {
  console.log('walker 1', walker);
  return db('walkers')
    .select()
    .insert(walker)
}


function getWalkers(body, db){
  return db('walkers')
    .select()
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
