import Database from  '../../../server'

class Stats extends Database.Model
{

    get tableName ()
    {
        return 'user_stats'
    }


}

export default Stats
