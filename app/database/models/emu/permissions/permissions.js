import Database from  '../../../server'

class Permissions extends Database.Model
{

    get tableName ()
    {
        return 'permissions'
    }


}

export default Permissions
