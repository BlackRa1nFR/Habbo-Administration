
import Database from  '../../../server'

class Reports extends Database.Model
{

    get tableName ()
    {
        return 'admin_forum_reports'
    }


}

export default Reports
