import Async from 'async'
import Friends from './friends'
import Hash from 'bcrypt-nodejs'
import Status from './wall/status'
import Database from  '../../../system'

export default class User extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_users'
    }

    friends ()
    {
      return this.hasMany(Friends, 'a')
    }

    status ()
    {
      return this.hasMany(Status, 'user')
    }

    static tryLogin (username, password)
    {
      return new Promise((r, e) => {
        User.where('username', username).fetch()
          .then (u => {

            if (u)
            {
              if (Hash.compareSync(password, u.toJSON().password))
              {
                r(u.toJSON())
              }
              else
              {
                e('password')
              }
            }
            else
            {
              e('fake')
            }


          })
          .catch (er => {
            e(er)
          })
      })
    }

    static hasDuplicate (username, email)
    {
      const user = false
      return new Promise((r, e) => {
        Async.series([
          // Check username
          function (cb)
          {
            User.where('username', username).fetch()
              .then (u => {
                if (u) cb(true)
                if (!u) cb()
              })
              .catch (er => {
                cb(er)
              })
          },
          // Check email
          function (cb)
          {
            User.where('email', email).fetch()
              .then (u => {
                if (u) cb(true)
                if (!u) cb()
              })
              .catch (er => {
                cb(er)
              })
          }
        ], ((error, info) =>  {
          if (!error) r(false)
          if (error) e(true)
        }))
      })
    }

}
