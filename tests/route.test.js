
var test = require('ava')
var request = require('supertest')

var createServer = require('../server/server')
var walkerDb = require('../server/db/walkerdb')
var setupDb = require('./setup-db')

setupDb(test, createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/authenticate')
    .end((err,res) => {
      //console.log("res : ",res.body, res.status)
      if (err) console.log(err)
      //t.pass()
      t.is(res.body.length, undefined, 'get no response')
      t.is(res.status, 404, 'Status 404 confirmed')
      t.end()
    })
})

test.cb('API Call: Get /v1', (t)=> {
  request(t.context.app)
    .post('/v1')
    .end((err, res) =>{
      //console.log('need the Api calls to work')
      t.is(res.body.length, undefined, 'get no response')
      t.is(res.status, 404, 'Status 404 confirmed')
      //t.pass()
      t.end()
    })
})
