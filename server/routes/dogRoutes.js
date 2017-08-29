const express = require('express')
const router = express.Router()

const dogsdb = require('../db/dogsdb')

router.get('/', (req, res) => {
  var db = req.app.get('db')
  dogsdb.getDogs(db)
    .then(dogs => {
      res.json(dogs)
    })
})

router.post('/', (req, res) => {
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
