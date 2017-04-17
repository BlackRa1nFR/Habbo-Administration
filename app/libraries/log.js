
import Logs from '../database/models/admin/logs'

class Log
{

    constructor (user, title, content, route)
    {
        if (Cache.get('admin_settings').action_logging == 1)
        {
            const log = {
                user_id     : user,
                title       : title,
                content     : content,
                route       : route,
                created_at  : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
            }

            new Logs(log).save()
        }

    }

}


export default Log
