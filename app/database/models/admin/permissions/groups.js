
import Database from  '../../../server'

class Groups extends Database.Model
{

    get tableName ()
    {
        return 'admin_permission_groups'
    }

    members ()
    {
      return this.hasMany('admin_users', 'permission_group')
    }

}

module.exports = Database.model('admin_permission_groups', Groups)
