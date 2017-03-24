'use strict';

import Database from  '../../../server'; 

class Posts extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_posts';
    }


}

export default Posts;
