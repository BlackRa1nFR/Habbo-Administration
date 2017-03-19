'use strict';

import Cache from 'memory-cache';
import Settings from '../../database/models/admin/settings';

class Variables
{

    constructor (Website)
    {
        Website.use(Variables.apply);
    }

    static apply (request, result, next)
    {

       // Cache 
       if (!Cache.get('admin_settings'))
       {
            Settings.forge().fetch()
                .then ((settings) => {
                    settings = settings.toJSON();
                    Cache.put('admin_settings', settings);
                    result.locals.page     = 'Page';
                    result.locals.settings = settings;
                    result.locals.success  = request.flash('success');
                    result.locals.error    = request.flash('error');
                    next();
                })
                .catch ((error) => {
                    result.render('errors/500');
                })
       }
       else 
       {
           result.locals.settings = Cache.get('admin_settings');
           result.locals.success  = request.flash('success');
           result.locals.error    = request.flash('error');
           next();
       }

    }
}
module.exports = Variables;