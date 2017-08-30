var test = require('ava')
var request = require('supertest')

const createToken = require('../../../server/lib/auth').createToken
var createServer = require('../../../server/server')
var db = require('../../../server/db/walkerdb')
var setupDb = require('../setup-db')

setupDb(test, createServer)

// test.cb.only('POST api/v1/register', t => {
//   request(t.context.app)
//     .post('/api/v1/register')
//     .send({username: 'bob', password: 'b'})
//     .end((err,res) => {
//       if (err) console.log(err)
//       t.context.db('users')
//       .then(data => {
//         t.is(data[0].username, 'bob')
//         t.end()
//       })
//     })
// })

test.cb('GET api/v1/walkers, contains walkers', (t)=> {
  request(t.context.app)
    .get('/api/v1/walkers')
    .set(`Authorization`, `Bearer ${createToken({}, process.env.JWT_SECRET)}`)
    .end((err, res) => {
      t.is(res.body[0].name, 'John')
      t.end()
    })
})

test.cb('POST /api/v1/walkers receives a new walker', t => {
  request(t.context.app)
    .post('/api/v1/walkers')
    .set(`Authorization`, `Bearer ${createToken({id: 3, name:
    'Terry'}, process.env.JWT_SECRET)}`)
    .send({name: 'Terry'})
    .end((err, res) => {
      t.context.db('walkers')
        .then(data => {
          t.is(data[2].name, 'Terry')
          t.end()
        })
    })
})

test.cb('GET /api/v1/dogs, contains dogs', t => {
  request(t.context.app)
    .get('/api/v1/dogs')
    .set(`Authorization`, `Bearer ${createToken({}, process.env.JWT_SECRET)}`)
    .end((err, res) => {
      t.is(res.body.length > 0, true)
      t.end()
    })
})

test.cb('POST /api/v1/dogs receives a new dog', t => {
  request(t.context.app)
    .post('/api/v1/dogs')
    .set(`Authorization`, `Bearer ${createToken({id: 4, name: 'Red'}, process.env.JWT_SECRET)}`)
    .send({name: 'Red'})
    .end((err, res) => {
      t.context.db('dogs')
        .then(data => {
          t.is(data.length, 2)
          t.is(data[1].name, 'Red')
          t.end()
        })

    })
})

test.cb('GET /api/v1/owners shows all owners', t => {
  request(t.context.app)
    .get('/api/v1/owners')
    .set(`Authorization`, `Bearer ${createToken({id: 3}, process.env.JWT_SECRET)}`)
    .end((err, res) => {
      t.is(res.body.length, 1)
      t.true(res.body[0].owner_id == 1)
      t.true(res.body[0].id == 1)
      t.end()
    })
})
