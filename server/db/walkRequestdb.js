function requestWalk(dog_id, db) {
  return db('walkRequest')
    .insert({dog_id})
}

function getWalkRequest(body, db) {
  return db('walkRequest')
    .select()
}



module.exports = {
  requestWalk,
  getWalkRequest
}
