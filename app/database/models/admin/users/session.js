
import User from './user'
import Database from  '../../../server'

class Session extends Database.Model
{

    get tableName ()
    {
        return 'admin_sessions'
    }

    user()
    {
        return this.belongsTo(User, 'user_id')
    }


}

export default Session
