'use strict';

import Numeral from 'numeral';
import Database from  '../../../server';

class User extends Database.Model
{
    

    get tableName ()
    {
        return 'users';
    }


    toJSON ()
    {
        let values = Database.Model.prototype.toJSON.apply(this);
            values.credits_format = Numeral(values.credits).format('0.0a').toUpperCase();
            values.pixels_format  = Numeral(values.activity_points).format('0.0a').toUpperCase();
            values.points_format  = Numeral(values.vip_points).format('0.0a').toUpperCase();
        return values;
    }


}

export default User;