import Database from  '../../../server'

class Searches extends Database.Model
{

    get tableName ()
    {
        return 'user_saved_searches'
    }


}

export default Searches
