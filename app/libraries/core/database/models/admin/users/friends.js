import User from './user'
import Database from  '../../../system'

export default class Friends extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_friends'
    }

    a ()
    {
      return this.belongsTo(User, 'id', 'a')
    }

    b ()
    {
      return this.hasOne(User, 'id', 'b')
    }


}
