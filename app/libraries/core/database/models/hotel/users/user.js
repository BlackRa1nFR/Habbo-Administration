import Rank from '../permissions/group'
import Database from  '../../../system'

export default class User extends Database.Model
{

    get tableName ()
    {
        return 'users'
    }

    rank ()
    {
      return this.hasOne(Rank, 'rank')
    }


}
