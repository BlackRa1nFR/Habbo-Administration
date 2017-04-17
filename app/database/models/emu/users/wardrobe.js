import Database from  '../../../server'

class Wardrobe extends Database.Model
{

    get tableName ()
    {
        return 'user_wardrobe'
    }


}

export default Wardrobe
