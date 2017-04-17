
import Error from '../../../../../libraries/error'
import Config from '../../../../../database/models/cms/config'

class Register
{

    constructor (Website)
    {
        Website.get('/cms/customize/register', Register.view)
        Website.post('/cms/customize/register', Register.update)
    }

    static view (request, result)
    {
        Config.forge().fetch()
            .then ((results) => {
                result.render('user/cms/customize/register', {
                    page    : 'Default Registration',
                    config  : results.toJSON()
                })
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }

    static update (request, result)
    {
        Config.forge().where('id', 1).fetch()
            .then ((results) => {
                results.set('register_motto', request.body.register_motto)
                results.set('register_look', request.body.register_look)
                results.set('register_credits', request.body.register_credits)
                results.set('register_pixels', request.body.register_pixels)
                results.set('register_points', request.body.register_points)
                results.save()

                request.flash('success', 'The default registration has been updated')
                result.redirect('back')
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }
}
module.exports = Register
