const bodyParser = require('body-parser')
const express =  require('express')
const verifyJwt = require('express-jwt')

const usersDb = require('../db/usersdb')

const router = express.Router()
router.use(bodyParser.json)




router.get('/users', (req, res) => {
  var db = req.app.get('db')
  var users = req.body
  usersDb.getUsers(users, db)
    .then(users => {
      res.json(users)
    })
})

module.exports = router
