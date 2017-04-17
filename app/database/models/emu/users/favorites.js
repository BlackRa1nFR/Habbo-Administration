import Database from  '../../../server'

class Favorites extends Database.Model
{

    get tableName ()
    {
        return 'user_favorites'
    }


}

export default Favorites
