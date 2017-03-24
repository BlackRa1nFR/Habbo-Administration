'use strict';

class Home
{

    constructor (Website)
    {
        Website.get('/me', this.get);
    }

    get (request, result) 
    {
        result.render('user/home/me', {
            page    : request.user.username,
            section : 1
        });
    }

}
module.exports = Home;