import Knex from 'knex'
import Configuration from './../../../config/database'
import Settings from './models/admin/settings'

export default class Test {
  static check (cb) {
    Knex(Configuration).select('id').from('xhabbo_settings')
      .then(r => {
        cb(null, `Database connection initiated`)
      })
      .catch(e => {
        cb(`Database connection failed : ${e}`)
      })
  }
}
