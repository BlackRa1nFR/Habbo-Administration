'use strict';

import Cache from 'memory-cache';
import Error from '../../../../../libraries/error';
import Settings from '../../../../../database/models/admin/settings';

class Configuration
{

    constructor (Website)
    {
        Website.get('/admin/customize/configuration', Configuration.view);
        Website.post('/admin/customize/configuration', Configuration.update);
    }

    static view (request, result)
    {
      Settings.forge().where('id', 1).fetch()
        .then ((results) => {
          result.render('user/admin/customize/configuration', {
            page    : 'Configuration',
            config  : results.toJSON()
          });
        })
        .catch ((error) => {
          new Error('normal', error);
          result.render('errors/500');
        })
    }

    static update (request, result)
    {
        Settings.forge().where('id', 1).fetch()
            .then ((results) => {
                results.set('branding', request.body.branding);
                results.set('short_branding', request.body.short_branding);
                results.set('web_folder', request.body.web_folder);
                results.set('action_logging', request.body.action_logging);
                results.set('strict_permissions', request.body.strict_permissions);
                results.save();
                Cache.put('admin_settings', results.toJSON());

                request.flash('success', 'Configuration values have been updaed');
                result.redirect('back');
            })
            .catch ((error) => {
              new Error('normal', error);
              result.render('errors/500');
            })
    }

}

module.exports = Configuration;
