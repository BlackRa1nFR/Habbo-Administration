'use strict';

class Servers
{

    constructor (Website)
    {
        Website.get('/cms/servers/dashboard', Servers.view);
    }

    static view (request, result)
    {
        result.render('user/cms/servers/dashboard', {
            page    : 'Server Dashboard'
        });
    }

}
module.exports = Servers;
