'use strict';

import Database from  '../../server';

class Status extends Database.Model
{

    get tableName ()
    {
        return 'server_status';
    }

}

export default Status;