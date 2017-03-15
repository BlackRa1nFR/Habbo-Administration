'use strict';


class User 
{

    constructor (Website)
    {
        Website.use(this.user);
    }



    user (request, result, next)
    {
        if (request.user)
        {
            result.locals.user = request.user.user;
            next();
        }
        else 
        {
            result.redirect('/login');
        }
    }

}
module.exports = User;