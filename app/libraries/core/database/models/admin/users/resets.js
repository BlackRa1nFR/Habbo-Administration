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
        Resets.forge().save({ user : id, link : Crypto.randomBytes(12).toString('hex') })
          .then (re => {
            r(true)
          })
          .catch (er => {
            e(er)
          })
      })

    }

}
