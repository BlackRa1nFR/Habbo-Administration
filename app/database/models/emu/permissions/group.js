import Rights from './rights'
import Users from '../users/users'
import Database from  '../../../server'

class Group extends Database.Model
{

    get tableName ()
    {
        return 'permissions_groups'
    }


    rights ()
    {
      return this.hasMany(Rights, 'group_id')
    }

    members ()
    {
      return this.hasMany(Users, 'rank').query(qb => { qb.where('rank', '>', 1) })
    }

}

export default Group
