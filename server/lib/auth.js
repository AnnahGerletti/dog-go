const jwt = require('jsonwebtoken')
const passport = require('passport')

const crypto = require('./crypto')
const users = require('./users')

function createToken (user, secret) {
  //db getOwnerByUserId
    //then getWalkerByUserId
  return jwt.sign({
    id: user.id,
    username: user.username,
    isWalker: user.isWalker,
    isOwner: user.isOwner
  }, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function handleError (err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt (req, res, next) {
  passport.authenticate(
    'local',
    (err, user, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Authentication failed due to a server error.'
        })
      }

      if (!user) {
        return res.status(403).json({
          message: 'Authentication failed.',
          info: info.message
        })
      }
      let knex = req.app.get('db')
      knex('owners').where('user_id', user.id).first()
        .then(owner => {
          user.isOwner = owner ? true : false
          knex('walkers').where('user_id', user.id).first()
            .then(walker => {
              user.isWalker = walker ? true : false
              const token = createToken(user, process.env.JWT_SECRET)
              res.json({
                message: 'Authentication successful.',
                token
              })
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
  )(req, res, next)
}

function verify (username, password, done) {
  users.getByName(username)
    .then(users => {
      if (users.length === 0) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      const user = users[0]
      if (!crypto.verifyUser(user, password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      done(null, {
        id: user.id,
        username: user.username
      })
    })
  .catch(err => {
    done(err, false, { message: "Couldn't check your credentials with the database." })
  })
}

module.exports = {
  handleError,
  issueJwt,
  verify,
  createToken
}
