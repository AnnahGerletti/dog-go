const express = require('express')
const router = express.Router()

const ownerDb = require('../db/ownersdb')

router.get('/', (req, res) => {
  var db = req.app.get('db')
  var user_id = req.user.id
  ownerDb.getDogsByUserId(user_id, db)
    .then(dogs => res.json(dogs))
})

router.get('/all', (req, res) => {
  var db = req.app.get('db')
  var user_id = req.user.id
  ownerDb.getOwnerWithDog(db)
    .then(owners => res.json(owners))

})

router.post('/', (req, res) => {
  var db = req.app.get('db')
  var owner = req.body
  owner.user_id = req.user.id
  ownerDb.insertOwners(owner, db)
  .then(response => {
    res.status(201).json(response)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
