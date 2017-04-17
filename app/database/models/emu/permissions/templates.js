
import Database from  '../../../server'

class Templates extends Database.Model
{

    get tableName ()
    {
        return 'admin_emu_permission_templates'
    }

}

export default Templates
