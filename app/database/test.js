'use strict';

import Settings from './models/cms/settings';

class Test 
{

    constructor ()
    {
        Settings.fetchAll()
        .then ((cms) => {
            return true;
        })
        .catch ((error) => {
            return false;
        });
    }

}
export default Test;