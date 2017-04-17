import Database from  '../../../server'

class Filter extends Database.Model
{

    get tableName ()
    {
        return 'room_filter'
    }


}

export default Filter
