import Moment from 'moment'
import User from './users/user'
import Database from  '../../system'

export default class Errors extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_errors'
    }

    user ()
    {
      return this.hasOne(User, 'id', 'user')
    }

    toJSON ()
    {
     const values   = Database.Model.prototype.toJSON.apply(this);
     values.when    = Moment(values.created_at).fromNow()
     return values;
   }

}
