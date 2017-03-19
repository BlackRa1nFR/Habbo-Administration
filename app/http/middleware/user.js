'use strict';


class User 
{

    constructor (Website)
    {
        Website.use(User.apply);
    }



    static apply (request, result, next)
    {
        if (request.user)
        {
            result.locals.user = request.user.user;

            if (request.user.user.status != 'regular')
            {
                switch (request.user.user.status)
                {
                    case 'locked': result.render('errors/account/locked'); break;
                    case 'pending_reset': result.render('errors/account/reset'); break;
                    default: next(); break;
                }
            }
            else
            {
                next();
            }

        }
        else 
        {
            if (request.path == '/login')
            {
                next();
            }
            else
            {
                result.redirect('/login');
            }
        }
    }

}
module.exports = User;