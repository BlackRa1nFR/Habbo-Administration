'use strict';


class User 
{

    constructor (Website)
    {
        Website.use(this.user);
    }



    user (request, result, next)
    {
        if (request.path.indexOf ('.css') == -1 && request.path.indexOf('.js') == -1 && request.path.indexOf('.png') == -1)
        {
            if (request.path != '/login')
            {

                if (request.user)
                {
                    next();
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
        else 
        {
            next();
        }
            
            


    }

}
module.exports = User;