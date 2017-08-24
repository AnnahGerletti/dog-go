const path = require('path')
const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const auth = require('./lib/auth')
const apiRoutes = require('./routes/api')

const server = express()

server.use(express.static('public'))
server.use(passport.initialize())

server.use('/api/v1/', apiRoutes)

passport.use(new LocalStrategy(auth.verify))


module.exports = server
