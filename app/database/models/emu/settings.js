'use strict';

import Database from  '../../server';

class Settings extends Database.Model
{

    get tableName ()
    {
        return 'server_settings';
    }


}

export default Settings;
