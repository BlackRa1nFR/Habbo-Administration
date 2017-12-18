import Async from 'async'
import User from './user'
import Crypto from 'crypto'
import Database from  '../../../system'

export default class Resets extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_links'
    }

    user ()
    {
      return this.belongsTo(User, 'user')
    }

    static addNew (id)
    {
      return new Promise((r, e) => {

        Async.parallel([
          // Delete Previous Keys
          function (cb)
          {
            Resets.where('user', id).destroy()
              .then (r => {
                cb()
              })
              .catch (e => {
                cb(e)
              })
          },
          // Create New
          function (cb)
          {
            const key = Crypto.randomBytes(12).toString('hex')
            Resets.forge().save({ user : id, link : key })
              .then (re => {
                cb(null, key)
              })
              .catch (er => {
                cb(er)
              })
          }
        ], ((errors, results) => {

          if (errors)
          {
            e(errors)
          }
          else
          {
            r(results[1])
          }
        }))

      })

    }

}
