import Database from  '../../../server'

class Rights extends Database.Model
{

    get tableName ()
    {
        return 'room_rights'
    }


}

export default Rights
