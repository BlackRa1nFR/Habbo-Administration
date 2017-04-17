
import Settings from '../../../../database/models/admin/settings'

class Options
{

    constructor (Website)
    {
        Website.get('/install/settings', Options.view)
        Website.post('/install/settings', Options.run)
    }

    static view (request, result)
    {
        result.render('settings')
    }

    static run (request, result)
    {
        Settings.forge().where('id', 1).fetch()
            .then ((results) => {
                results.set('branding', request.body.branding)
                results.set('short_branding', request.body.short_branding)
                results.set('web_folder', request.body.web_folder)
                results.set('action_logging', request.body.action_logging)
                results.set('strict_permissions', request.body.strict_permissions)
                results.save()

                result.redirect('/install/user')
            })
            .catch ((error) => {
              result.send('Something went wrong')
          })
    }

}
module.exports = Options
