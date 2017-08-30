const test = require('ava')
const request = require('supertest')

const createToken = require('../../../server/lib/auth').createToken
const createServer = require('../../../server/server')
const setupdb = require('../setup-db')

setupdb(test, createServer)

test.cb('Authenticate walkers route', t => {
  request(t.context.app)
    .post('/api/v1/walkers')
    .set(`Authorization`,`Bearer ${createToken({id:3, username: "Bob"}, process.env.JWT_SECRET)}`)
    .send({name: 'mary'})
    .expect(201)
    .end((err, res) => {
      t.context.db('walkers').where('user_id', 3).first()
        .then((walker) => {
          t.is(walker.name, 'mary')
          t.end()
        })
    })
})
