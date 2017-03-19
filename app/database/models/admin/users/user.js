'use strict';

import Database from  '../../../server';
import Users from '../../emu/users/users';
import Groups from '../permissions/groups';

class User extends Database.Model
{

    get tableName ()
    {
        return 'admin_users';
    }


    group ()
    {
        return this.belongsTo(Groups, 'permission_group');
    }

    habbo ()
    {
        return this.belongsTo(Users);
    }


}

module.exports = User;