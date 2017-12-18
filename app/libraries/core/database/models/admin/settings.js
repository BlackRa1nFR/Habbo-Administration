import Hash from 'bcrypt-nodejs'
import Database from  '../../system'

export default class Settings extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_settings'
    }

    static getCurrent ()
    {
      return new Promise((r, e) => {
        Settings.where('id', 1).fetch()
          .then (s => {

            if (s)
            {
              r(s.toJSON())
            }
            else
            {
              e('Please add a row to the xhabbo_settings table!')
            }
          })
          .catch (error => {
            e(error)
          })
      })
    }

    static enableMaintenance (password)
    {
      return new Promise((r,e ) => {
        Settings.where('id', 1).fetch()
          .then (s => {
            s.set('status', 'maintenance')
            s.set('security', Hash.hashSync(password))
            s.save()
            r(true)
          })
          .catch (er => {
            e(er)
          })
      })
    }

    static disableMaintenance (password)
    {
      return new Promise((r, e) => {
        Settings.where('id', 1).fetch()
          .then (s => {
            if (Hash.compareSync(password, s.toJSON().security))
            {
              s.set('status', 'normal')
              s.set('security', null)
              s.save()
              r(true)
            }
            else
            {
              e(false)
            }
          })
          .catch (er => {
            e(er)
          })
      })

    }

}
