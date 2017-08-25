
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const walkerdb = require('../db/walkerdb')

const router = express.Router()
// router.use(bodyParser.json())


router.get('/walkers', (req, res) => {
  console.log('hi');
  var db = req.app.get('db')
  walkerdb.getWalkers(req.body, db)
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


router.post('/walker', (req, res) => {
  var db = req.app.get('db')
  console.log("Walker form data :", req.body)
  db("walkers").insert(req.body)
    .then(response =>{
    console.log("then Api",response);
    res.json(response)
  })
})

//
router.get('/walker/:id', (req, res) => {
  var db = req.app.get('db')
  var id = req.params.id
  db("walkers").getWalker(id, db)
  .then(function(data){
    res.json(data)
  })
})

// These routes are protected



module.exports = router
