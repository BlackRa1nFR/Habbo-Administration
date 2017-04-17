import Database from  '../../../server'

class Relationships extends Database.Model
{

    get tableName ()
    {
        return 'user_relationships'
    }


}

export default Relationships
