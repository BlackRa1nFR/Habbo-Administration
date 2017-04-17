
import Database from  '../../server'

class Settings extends Database.Model
{

    get tableName ()
    {
        return 'admin_settings'
    }


}

export default Settings
