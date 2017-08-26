const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const walkerdb = require('../db/walkerdb')

const router = express.Router()
router.use(bodyParser.json())

router.get('/walkers', (req, res) => {
  var db = req.app.get('db')
  walkerdb.getWalkers(req.body, db)
  .then(function(data){
      res.json(data)
  })
})

router.post('/walkers', (req, res) => {
  var db = req.app.get('db')
  var walker = req.body
  walker.user_id = req.user.id
  walkerdb.insertWalker(walker, db)
    .then(response =>{
      res.status(201).json(response)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/walker/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id
  walkerdb.getWalker(id, db)
  .then(function(data){
    res.json(data)
  })
})

// Protect all routes beneath this point

// router.use(
//   verifyJwt({
//     secret: getSecret
//   }),
//   auth.handleError
// )




//


// These routes are protected



module.exports = router
