'use strict';

import Async from 'async';
import Cache from 'memory-cache';
import Status from '../../database/models/emu/status';
import Settings from '../../database/models/cms/settings';
import Navigation from '../../database/models/cms/navigation';

class Variables
{

    constructor (Website)
    {
        Website.use(Variables.apply);
    }

    static apply (request, result, next) 
    {

        Async.parallel([Variables.settings, Variables.server], ((errors, results) =>
        {
            result.locals.href    = request.path.split('/')[1];
            result.locals.website = results[0];
            result.locals.server  = results[1];
            result.locals.success = request.flash('success');
            result.locals.error   = request.flash('error');
            next();

        }));

    }

    
    static settings (callback)
    {
        if (!Cache.get('cms_settings'))
        {
            Settings.forge().fetch()
            .then ((cms) => {
                cms = cms.toJSON();
                Cache.put('cms_settings', cms);
                return callback(null, cms);
            })
            .catch ((err) => {
                callback(err);
            });
        }
        else 
        {
            callback(null, Cache.get('cms_settings'));
        }
    }

    static server (callback)
    {
        Status.forge().fetch() 
        .then ((server) => {
            return callback(null, server.toJSON());
        })
        .catch ((err) => {
            callback(err);
        });
    }

    






}
module.exports = Variables;