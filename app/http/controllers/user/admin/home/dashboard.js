'use strict';

class Dashboard 
{

    constructor (Website)
    {
        Website.get('/dashboard', this.get);
    }

    get (request, result)
    {
        result.render('user/admin/home/dashboard', {
            page : 'Dashboard'
        });
    }

}
module.exports = Dashboard;