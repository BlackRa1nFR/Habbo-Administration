'use strict';

import Database from  '../../../server';

class User extends Database.Model
{

    get tableName ()
    {
        return 'admin_users';
    }


}

module.exports = User;