
import Notes from './notes'
import Moment from 'moment'
import Database from  '../../../server'
import Users from '../../emu/users/users'
import Groups from '../permissions/groups'

class User extends Database.Model
{

    get tableName ()
    {
        return 'admin_users'
    }


    group ()
    {
        return this.belongsTo(Groups, 'permission_group')
    }

    habbo ()
    {
        return this.belongsTo(Users)
    }

    notes ()
    {
      return this.hasMany(Notes, 'user_id')
    }

    toJSON ()
    {
      let values = Database.Model.prototype.toJSON.apply(this)
        if (values.permission_group == 0)
        {
          values.group.name = 'No Group Found'
        }
        values.last_active = Moment(values.last_active).fromNow()
      return values
    }


}

module.exports = Database.model('admin_users', User)
