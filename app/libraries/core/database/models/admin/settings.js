import Database from  '../../system'

export default class Settings extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_settings'
    }

    static compare (v)
    {
      return new Promise((r, e) => {
        Settings.forge().fetch()
          .then (d => {
            if (d.toJSON().build == v)
            {
              r(false)
            }
            else
            {
              r(true)
            }
          })
      })
    }

}
