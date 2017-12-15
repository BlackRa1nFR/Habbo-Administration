import User from './user'
import Database from  '../../../system'

export default class Bans extends Database.Model
{

    get tableName ()
    {
        return 'bans'
    }

    user ()
    {
      return this.hasOne(User, 'id', 'value')
    }


}
