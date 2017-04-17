
import Moment from 'moment'
import Database from  '../../server'

class Errors extends Database.Model
{

    get tableName ()
    {
        return 'admin_errors'
    }

    toJSON ()
    {
      let values = Database.Model.prototype.toJSON.apply(this)
        values.created_at = Moment(values.created_at).format('MMM D, YYYY (h:mm A)')
      return values
    }


}

export default Errors
