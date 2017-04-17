
import knex from 'knex'
import bookshelf from 'bookshelf'
import config from '../conf/database'

const Database = bookshelf(knex(config))
Database.plugin('registry')


export default Database
