import Database from '../../system'

export default class Settings extends Database.Model
{

  get tableName ()
  {
    return 'cms_settings'
  }

  static retrieve ()
  {
    return new Promise((r, e) => {
      Settings.where('id', 1).fetch()
        .then (s => {
          r(s.toJSON())
        })
        .catch (er => {
          e(er)
        })
    })
  }

  static update (data)
  {
    return new Promise((r, e) => {
      Settings.where('id', 1).save(data, { method : 'update' })
        .then (s => {
          r(true)
        })
        .catch (er => {
          e(er)
        })
    })
  }

}
