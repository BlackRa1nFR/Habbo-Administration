'use strict';

import Database from  '../../server';

class Navigation extends Database.Model
{
    get tableName ()
    {
        return 'cms_navigation';
    }

    children()
    {
        return this.hasMany(Navigation, 'section', 'id');
    }

}

export default Navigation;