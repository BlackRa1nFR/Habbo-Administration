'use strict';

import Async from 'async';
import Cache from 'memory-cache';
import Navigation from '../../database/models/cms/navigation';

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
            User.user = request.user;
            Async.parallel([User.navi], ((errors, results) => 
            {

                if (errors)
                {
                    result.render('errors/500');
                }
                else
                {
                    result.locals.navi = results[0];
                    result.locals.user = request.user;
                    next();
                }
            }));
            
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

    static navi (callback)
    {
        if (!Cache.get('cms_navi'))
        {
            Navigation.fetchAll() 
            .then ((navi) => {
                let parents = [];
                let children = [];
                navi = navi.toJSON();

                navi.forEach((n) => {
                    if (n.text == 'USER') { n.text = User.user.username; }
                    if (n.href == 'profile') { n.href = 'profile/' + User.user.username; }
                    if (n.parent == 1) { parents.push(n); } else { children.push(n); } 
                });

                navi = {
                    parents : parents,
                    children : children
                };
                Cache.put('cms_navi', navi);
                return callback(null, navi);
            })
            .catch ((err) => {
                callback(err);
            });
        }
        else
        {
            callback(null, Cache.get('cms_navi'));
        }
    }

}
module.exports = User;