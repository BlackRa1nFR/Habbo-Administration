import Database from  '../../../server'

class Effects extends Database.Model
{

    get tableName ()
    {
        return 'user_effects'
    }


}

export default Effects
