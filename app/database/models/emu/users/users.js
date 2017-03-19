'use strict';

import Database from  '../../../server';

class Users extends Database.Model
{

    get tableName ()
    {
        return 'users';
    }


}

export default Users;