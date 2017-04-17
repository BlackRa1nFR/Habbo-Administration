
import Database from  '../../server'

class Backups extends Database.Model
{

    get tableName ()
    {
        return 'admin_backups'
    }


}

export default Backups
