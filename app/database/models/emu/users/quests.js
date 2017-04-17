import Database from  '../../../server'

class Quests extends Database.Model
{

    get tableName ()
    {
        return 'user_quests'
    }


}

export default Quests
