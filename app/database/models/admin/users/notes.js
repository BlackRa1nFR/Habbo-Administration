
import Database from  '../../../server'

class Notes extends Database.Model
{

    get tableName ()
    {
        return 'admin_notes'
    }

}

module.exports = Notes
