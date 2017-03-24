'use strict';

import Error from '../../../../../libraries/error';
import Config from '../../../../../database/models/cms/config';

class Settings
{

    constructor (Website)
    {
        Website.get('/cms/customize/settings', Settings.view);
        Website.post('/cms/customize/settings', Settings.update);
    }

    static view (request, result)
    {
        Config.forge().fetch()
            .then ((results) => {
                result.render('user/cms/customize/settings', {
                    page    : 'Website Configurations',
                    config  : results.toJSON()
                });
            })
            .catch ((error) => {
                new Error('normal', error);
                result.render('errors/500');
            });
    }

    static update (request, result)
    {
        Config.forge().where('id', 1).fetch()
            .then ((results) => {
                results.set('name',request.body.name);
                results.set('web_folder', request.body.web_folder);
                results.save();

                request.flash('success', 'The website settings has been updated');
                result.redirect('back');
            })
            .catch ((error) => {
                new Error('normal', error);
                result.render('errors/500');
            });
    }
}
module.exports = Settings;
