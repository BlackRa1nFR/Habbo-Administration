'use strict';

import Database from  '../../server';

class Config extends Database.Model
{

    get tableName ()
    {
        return 'cms_settings';
    }
}

export default Config;
