import Moment from 'moment'
import Group from './permissions'
import Database from '../../../system'

export default class User extends Database.Model
{

  get tableName ()
  {
    return 'users'
  }

  group ()
  {
    return this.belongsTo(Group, 'rank')
  }

  toJSON ()
  {
    const values = Database.Model.prototype.toJSON.apply(this)
    values.credits = values.credits.toLocaleString()
    values.pixels= values.pixels.toLocaleString()
    values.points = values.points.toLocaleString()
    values.last_online = Moment.unix(values.last_online).fromNow()
    return values
  }

  static retrieve (data, type)
  {
    return new Promise ((r, e) => {
      switch (type)
      {
        case 'username':
          User.where('username', data).fetch()
            .then (u => {
              if (u)
              {
                r(u.toJSON())
              }
              else
              {
                r(null)
              }
            })
            .catch (er => {
              e(er)
            })
        break;

        case 'id':
        User.where('id', data).fetch()
          .then (u => {
            if (u)
            {
              r(u.toJSON())
            }
            else
            {
              r(null)
            }
           })
          .catch (er => {
            e(er)
          })
        break;
      }
    })
  }
}
