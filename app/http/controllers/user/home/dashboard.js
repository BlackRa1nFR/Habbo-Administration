'use strict';

class Dashboard 
{

    constructor (Website)
    {
        Website.get('/dashboard', this.get);
    }

    get (request, result)
    {
        result.render('user/home/dashboard');
    }

}
module.exports = Dashboard;