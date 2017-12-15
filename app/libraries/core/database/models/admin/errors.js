import Database from  '../../system'

export default class Errors extends Database.Model
{

    get tableName ()
    {
        return 'xhabbo_errors'
    }

}
