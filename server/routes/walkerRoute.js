const express = require('express')
const router = express.Router()

const walkerdb = require('../db/walkerdb')

router.get('/', (req, res) => {
  var db = req.app.get('db')
  walkerdb.getWalkers(db)
    .then(function(data){
        res.json(data)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  var db = req.app.get('db')
  var walker = req.body
  console.log("req.user.id :", req.user.id)
  walker.user_id = req.user.id
  walkerdb.insertWalker(walker, db)
    .then(response =>{
      res.status(201).json(response)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id
  walkerdb.getWalker(id, db)
  .then(function(data){
    res.json(data)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

module.exports = router
