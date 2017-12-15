import Async from 'async'
import File from 'fs'
import Knex from 'knex'
export default class Database
{

  static runTests (config, cb)
  {
    Async.series([
      Async.apply(Database.testConfiguration, config),
      Async.apply(Database.saveConfiguration, config)
    ], ((e, r) => {

      if (!e)
      {
        return cb(null, 'good')
      }
      else
      {
        return cb('install failed')
      }

    }))
  }

  static testConfiguration (config, cb)
  {
    const c = Knex(config)

    c.select('id').from('users')
      .then (r => {
        cb()
      })
      .catch (e => {
        if (e) return cb('failed')
      })
    }

  static saveConfiguration (config, cb)
  {
    File.writeFile(`${homeDirectory}/app/config/database.json`, JSON.stringify(config), (e => {
      cb()
    }))
  }


}
