'use strict';

import Posts from './posts';
import Database from  '../../../server';

class Category extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_categories';
    }

    latest ()
    {
        return this.hasMany(Posts, 'category_id').query((qb) => { qb.limit(4); });
    }


}

export default Category;
