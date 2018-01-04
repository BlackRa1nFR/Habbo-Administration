import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../../../config/database'

const Database = bookshelf(knex(config))

Database.plugin('pagination')
export default Database
