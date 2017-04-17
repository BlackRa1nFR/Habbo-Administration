'use strict';

import Database from  '../../server';

class Wordfilter extends Database.Model
{

    get tableName ()
    {
        return 'wordfilter';
    }


}

export default Wordfilter;
