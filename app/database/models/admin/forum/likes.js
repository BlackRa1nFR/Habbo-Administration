
import Database from  '../../../server'

class Likes extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_likes'
    }


}

export default Likes
