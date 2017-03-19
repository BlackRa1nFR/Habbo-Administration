'use strict';

import Database from  '../../../server';

class Groups extends Database.Model
{

    get tableName ()
    {
        return 'admin_permission_groups';
    }

}

module.exports = Groups;