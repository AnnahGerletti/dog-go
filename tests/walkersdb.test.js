const test = require('ava')
const knex = require('knex')

const config = require('../knexfile').test
const walkers = require('../server/db/walkerdb')

test.beforeEach(t => {
  t.context.db = knex(config)
  return t.context.db
    .migrate.latest()
    .then(() => t.context.db.seed.run())
})

test.afterEach(t => t.context.db.destroy())

test('There are Walkers in the Walker Table', t => {
  return walkers
    .getWalkers(t.context.db)
    .then(actual => t.truthy(actual))
})
