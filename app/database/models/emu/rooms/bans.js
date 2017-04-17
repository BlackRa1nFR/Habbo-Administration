import Database from  '../../../server'

class Bans extends Database.Model
{

    get tableName ()
    {
        return 'room_bans'
    }


}

export default Bans
