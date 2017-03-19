'use strict';

import Logs from '../database/models/admin/logs';

class Log
{

    constructor (user, title, content, route)
    {
        const log = {
            user_id     : user,
            title       : title,
            content     : content,
            route       : route,
            created_at  : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
        };

        new Logs(log).save()
    }

}


export default Log;