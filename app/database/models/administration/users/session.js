'use strict';

import Database from  '../../../server';

class Session extends Database.Model
{

    get tableName ()
    {
        return 'admin_sessions';
    }


}

export default Session;