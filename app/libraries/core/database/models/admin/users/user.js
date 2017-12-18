import Async from 'async'
import Moment from 'Moment'
import Reset from './resets'
import Hash from 'bcrypt-nodejs'
import Group from './groups/group'
import Database from  '../../../system'
import Event from '../../../../events/admin/user'

export default class User extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_users'
    }

    group ()
    {
      return this.belongsTo(Group, 'group')
    }

    resets ()
    {
      return this.hasOne(Reset, 'user')
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

    static updateWelcome(id, info)
    {
      return new Promise((r, e) => {

        User.where('id', id).fetch()
          .then (u => {
            u.set('name', info.name)
            u.set('email', info.email)
            u.set('password', Hash.hashSync(info.password))
            u.save()

            Reset.where('user', id).destroy()

            r(true)
          })
          .catch (er => {
            e(er)
          })

      })
    }

    static updateAccount (info)
    {
      return new Promise((r,e ) => {
        User.where('id', info.id).fetch()
          .then (u => {

            if (u)
            {
              const data = u.toJSON()
              u.set('name', info.name)
              u.set('email', info.email)
              u.set('status', info.status)
              u.save()

              // Email Change Event
              if (data.email != info.email) Event.EmailWasChanged(info.id, info.email)

              // Password Change Event
              if (info.password) Event.PasswordChangeRequested(info.id)

              // User Suspended Event
              if (info.status == 'locked') Event.SuspensionFiled(info.id, info.username, info.email)

              r()
            }
            else
            {
              e('fake account')
            }

          })
          .catch (er => {
            e(er)
          })
      })

    }

    static doReset (email)
    {

      return new Promise((r, e) => {

        User.where('email', email).fetch()
          .then (u => {

            if (u)
            {
              Reset.addNew(u.toJSON().id)
                .then (k => {
                  r(true)
                })
                .catch (er => {
                  e(er)
                })
            }
            else
            {
              r(false)
            }

          })
          .catch (er => {
            e(er)
          })


      })
    }



    toJSON ()
    {
     const values            = Database.Model.prototype.toJSON.apply(this)
     values.last_active      = Moment(values.last_ctive).fromNow()
     values.account_length   = Moment(values.created_at).fromNow()

     return values;
   }

}
