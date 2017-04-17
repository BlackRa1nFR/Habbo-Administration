import Database from  '../../../server'

class Achievements extends Database.Model
{

    get tableName ()
    {
        return 'user_achievements'
    }


}

export default Achievements
