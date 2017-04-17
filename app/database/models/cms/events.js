import Moment from 'moment'
import Database from  '../../server'
import Users from '../emu/users/users'

class Events extends Database.Model
{

    get tableName ()
    {
        return 'cms_events'
    }

    author ()
    {
        return this.belongsTo(Users)
    }

    toJSON()
    {
        let values                  = Database.Model.prototype.toJSON.apply(this)
        values.starts_at_longAgo    = Moment(values.starts_at).fromNow()
        values.ends_at_longAgo      = Moment(values.ends_at).fromNow()
        return values
    }


}

export default Events
