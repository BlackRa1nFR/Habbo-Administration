'use strict';

class Redirect
{

    constructor (Website)
    {
        Website.use(this.redirect);
    }

    redirect (request, result, next)
    {
        
        if (request.path === '/')
        {
            if (request.user != null)
            {
                result.redirect('/dashboard');
            }
            else 
            {
                result.redirect('/login');
            }
        }
        else
        {
            next();
        }


    }

}
module.exports = Redirect;