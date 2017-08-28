const bodyParser = require ('body-parser')
const express = require ('express')
const verifyJwt = require('express-jwt')

const router = express.Router()
router.use(bodyParser.json())

const walkRequestdb = require('../db/walkRequestdb')

router.get('/walkrequest', (req, res) => {
  var db = req.app.get('db')
  var body = req.body
  walkRequestdb.getWalkRequest(body, db)
    .then(response => {
      res.json(response)
    })
})

router.post('/walkrequest/:dog_id', (req, res) => {
  var db = req.app.get('db')
  var dogId = req.params.dog_id
  console.log('req', dogId);

  walkRequestdb.requestWalk(dogId, db)
    .then(response => {
      res.status(201).json(response)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err.message)
    })
})

module.exports = router
