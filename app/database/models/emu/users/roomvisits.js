import Database from  '../../../server'

class Visits extends Database.Model
{

    get tableName ()
    {
        return 'user_roomvisits'
    }


}

export default Visits
