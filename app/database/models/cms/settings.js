'use strict';

import Database from  '../../server';

class Settings extends Database.Model
{

    get tableName ()
    {
        return 'cms_settings';
    }

}

export default Settings;