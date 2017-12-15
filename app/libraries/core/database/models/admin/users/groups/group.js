import Members from '../user'
import Database from  '../../../../system'

export default class Group extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_groups'
    }

    members ()
    {
      return this.hasMany(Members, 'group')
    }


}
