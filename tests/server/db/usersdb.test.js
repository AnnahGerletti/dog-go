const test = require('ava')
const knex = require('knex')

const config = require('../../../knexfile').test
const users = require('../../../server/lib/users')

test.beforeEach(t => {
  t.context.db = knex(config)
  return t.context.db
    .migrate.latest()
    .then(() => t.context.db.seed.run())
    t.end()
})

test.afterEach(t => t.context.db.destroy())

test('exists is true for aardvark', t => {
  return users
    .exists('aardvark', t.context.db)
    .then(actual => t.truthy(actual))
    t.end()
})

test('exists is falsy for gnu', t => {
  return users
    .exists('gnu', t.context.db)
    .then(actual => t.falsy(actual))
    t.end()
})

test('getById obtains correct user', t => {
  return users
    .getById(2, t.context.db)
    .then(([ user ]) => t.is(user.username, 'capybara'))
    t.end()
})

test('getByName obtains correct user', t => {
  return users
    .getByName('aardvark', t.context.db)
    .then(([ user ]) => t.is(user.id, 1))
    t.end()
})
