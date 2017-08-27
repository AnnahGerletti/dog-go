
function getUsers (user, db) {
  return db('users')
    .select('*')
}
module.exports = {
 getUsers
}
