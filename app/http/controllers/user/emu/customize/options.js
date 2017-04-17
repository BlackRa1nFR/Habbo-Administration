
import Error from '../../../../../libraries/error'
import Settings from '../../../../../database/models/emu/settings'

class Options
{

    constructor (Website)
    {
        Website.get('/emu/customize/options', Options.view)
        Website.post('/emu/customize/options', Options.save)
    }

    static view (request, result)
    {
        Settings.fetchAll()
            .then ((results) => {
                result.render('user/emu/customize/options', {
                    page    : 'Emulator Settings',
                    config  : results.toJSON()
                })
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }

    static save (request, result)
    {
    }

}
module.exports = Options
