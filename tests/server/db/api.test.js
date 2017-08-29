const test = require('ava')
const request = require('supertest')

const server = require('../../../server/server')

test.cb.only('Authenticate complains about no credentials', t => {
  request(server)
    .post('/api/v1/authenticate')
    .send({})
    .expect(403)
    .end((err, res) => {
      t.ifError(err)
      t.is(res.body.info, 'Missing credentials')
      t.end()
    })
})
