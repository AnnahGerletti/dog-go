const express = require ('express')
const router = express.Router()

const walkRequestdb = require('../db/walkRequestdb')

router.get('/', (req, res) => {
  var db = req.app.get('db')
  walkRequestdb.getWalkRequest(db)
    .then(response => {
      res.json(response)
    })
})

router.post('/:dog_id', (req, res) => {
  var db = req.app.get('db')
  var dogId = req.params.dog_id
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
