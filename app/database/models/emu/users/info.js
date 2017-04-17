import Database from  '../../../server'

class Info extends Database.Model
{

    get tableName ()
    {
        return 'user_info'
    }


}

export default Info
