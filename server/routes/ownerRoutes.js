
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const router = express.Router()
router.use(bodyParser.json())

const ownerDb = require('../db/ownersdb')

router.get('/owners', (req, res) => {
  var db = req.app.get('db')
  var owner = req.body
  ownerDb.getOwnerWithDog(owner, db)
    .then(owner => {
      console.log(owner)
      res.json(owner)
    })
})

router.post('/owners', (req, res) => {
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
