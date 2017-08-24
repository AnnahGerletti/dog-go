
const bodyParser = require('body-parser')
const express = require('express')
const verifyJwt = require('express-jwt')

const router = express.Router()
router.use(bodyParser.json())

// Protect all routes beneath this point
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

// These routes are protected
router.post('/secret', (req, res) => {
  var db = req.app.get('db')
  var walker = req.body.walker
  walker.user_id = req.user.id
  db("walkers").insert(walker)
  .then(response => {
    console.log(response);
    res.sendStatus(201)
  }
})




module.exports = router
