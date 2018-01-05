import Database from '../../../system'

export default class Pages extends Database.Model
{

  get tableName ()
  {
    return 'catalog_pages'
  }


  static retrieve (id)
  {
    return new Promise ((r, e) => {
      if (id)
      {
        Pages.where('id', id).fetch({ withRelated : ['children', 'items'] })
          .then (p => {
            r(p.toJSON())
          })
          .catch (er => {
            e(er)
          })
      }
      else
      {
        Pages.fetchAll()
          .then (p => {
            r(p.toJSON())
          })
          .catch (er => {
            e(er)
          })
        }
    })
  }

  static update (data)
  {

  }

  static create (data)
  {

  }

  static delete ()
  {

  }


}
