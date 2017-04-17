import Permissions from './permissions'
import Database from  '../../../server'

class Rights extends Database.Model
{

    get tableName ()
    {
        return 'permissions_rights'
    }

    p ()
    {
      return this.hasOne(Permissions, 'id', 'permission_id')
    }

}

export default Rights
