import Moment from 'moment'
import Group from '../permissions/group'
import Database from  '../../../system'

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
     const values         = Database.Model.prototype.toJSON.apply(this)
     values.credits       = values.credits.toLocaleString()
     values.vip_points    = values.vip_points.toLocaleString()
     values.last_online   = Moment.unix(values.last_online).fromNow()
     return values;
   }


}
