'use strict';

class Backups
{

    constructor (Website)
    {
        Website.get('/admin/tools/backups', Backups.view);
    }

    static view (request, result)
    {
        result.render('user/admin/tools/backups', {
            page    : 'Database Backups'
        });
    }

}
module.exports = Backups
