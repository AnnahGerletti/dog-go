const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const dogsdb = require('../db/dogsdb')

const router = express.Router()
router.use(bodyParser.json())

router.get('/dogs', (req, res) => {
  var db = req.app.get('db')
  var dog = req.body
  dogsdb.getDogs(dog, db)
    .then(dogs => {
      res.json(dogs)
    })
})

router.post('/dogs', (req, res) => {
  const dog = req.body
  const db = req.app.get('db')
  dogsdb.insertWithUserId(db, req.user.id, dog)
  .then(response => {
    res.status(201).json(response)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
