import Database from  '../../../server'

class Clothing extends Database.Model
{

    get tableName ()
    {
        return 'user_clothing'
    }


}

export default Clothing
