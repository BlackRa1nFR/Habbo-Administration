'use strict';

class Logout
{

    constructor (Website)
    {
        Website.get('/logout', function(req, res) { req.logout(); res.redirect('/login'); });
    }

}
module.exports = Logout;