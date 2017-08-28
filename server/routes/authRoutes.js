// const verifyJwt = require('express-jwt')
// const auth = require('../lib/auth')
//
// const express = require('express')
// const router = express.Router()
//
// function getSecret (req, payload, done) {
//   done(null, process.env.JWT_SECRET)
// }
// // Protect all routes beneath this point
// router.use(
//   verifyJwt({
//     credentialsRequired: false,
//     secret: getSecret
//   }),
//   auth.handleError
// )
//
// module.exports = router
