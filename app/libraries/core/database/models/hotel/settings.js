import Database from '../../system'

export default class Settings extends Database.Model
{

  get tableName ()
  {
    return 'emulator_settings'
  }


  static retrieve ()
  {
    return new Promise ((r, e) => {
      Settings.fetchAll()
        .then (s => {
          r(s.toJSON())
        })
        .catch (er => {
          e(er)
        })
    })
  }

  static update ()
  {
    return new Promise ((r, e) => {
      new Settings.save()
        .then (s => {
          r(s.toJSON())
        })
        .catch (er => {
          e(er)
        })
    })
  }


}
