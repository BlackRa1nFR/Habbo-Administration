import Database from  '../../server'

class Landing extends Database.Model
{

    get tableName ()
    {
        return 'server_landing'
    }


}

export default Landing
