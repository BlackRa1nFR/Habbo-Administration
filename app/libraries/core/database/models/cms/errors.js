import User from '../hotel/users/user'
import Moment from 'moment'
import Database from '../../system'

export default class Errors extends Database.Model
{

  get tableName ()
  {
    return 'cms_errors'
  }

  user ()
  {
    return this.belongsTo(User)
  }

  static retrieve (id)
  {
    if (id)
    {
      return new Promise((r, e) => {
        Errors.where('id', id).fetch({ withRelated : ['user'] })
          .then (er => {
            r(er.toJSON())
          })
          .catch (er => {
            e(er)
          })
      })
    }
    else
    {
      return new Promise((r, e) => {
        Errors.fetchAll()
          .then (er => {
            r(er.toJSON())
          })
          .catch (er => {
            e(er)
          })
      })
    }
  }

  static remove (id)
  {
    return new Promise((r, e) => {
      Errors.where('id', id).fetch()
        .then (e => {
          if (e)
          {
            Errors.where('id', id).destroy()
              .then (s => {
                r()
              })
              .catch (er => {
                e(er)
              })
          }
        })
        .catch (er => {
          e(er)
        })
    })
  }

  toJSON ()
  {
    const values = Database.Model.prototype.toJSON.apply(this)
    values.created_at = Moment(values.created_at).fromNow()
    return values
  }

}
