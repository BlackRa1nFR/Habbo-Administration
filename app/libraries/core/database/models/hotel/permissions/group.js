import Database from  '../../../system'

export default class Groups extends Database.Model
{

    get tableName ()
    {
        return 'permissions_groups'
    }


}
