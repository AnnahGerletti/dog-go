const bodyParser = require('body-parser')
const express = require('express')

const users = require('../lib/users')
const auth = require('../lib/auth.js')

const router = express.Router()
router.use(bodyParser.json())

// This is the only API route that uses local strategy,
// to check if we can issue a JWT in response to requests.
// router.post('/authenticate', auth.issueJwt)
//
router.post('/register',
  register,
  auth.issueJwt
)
router.post('/authenticate',
  login,
  auth.issueJwt
)

function register (req, res, next) {
  users.exists(req.body.username, req.app.get('db'))
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      // req.login() can be used to automatically log the user in after registering
      users.create(req.body.username, req.body.password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({ message: err.message })
    })
}

function login (req, res, next) {
  users.exists(req.body.username, req.app.get('db'))
    .then(exists => {
      if (exists) {
        users.confirm(req.body.username, req.body.password, req.app.get('db'))
        .then((user) => {
          if(user){
            // document.location('/#/accounts')
            next()
          } else {
            return res.status(400).send( {message: 'incorrect password'})
          }
        })
      } else {
        return res.status(400).send( {message: 'User does not exists'})
      }
    })
}

//TODO: login route

module.exports = router
