
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const router = express.Router()
router.use(bodyParser.json())

const ownerDb = require('../db/ownersdb')

// Protect all routes beneath this point
// router.use(
//   verifyJwt({
//     secret: getSecret
//   }),
//   auth.handleError
// )

// These routes are protected
router.post('/owners', (req, res) => {
  console.log(req.body)
  var db = req.app.get('db')
  var owner = req.body
  owner.user_id = req.user.id
  ownerDb.insertOwners(owner, db)
  .then(response => {
    res.sendStatus(201).json(response)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
