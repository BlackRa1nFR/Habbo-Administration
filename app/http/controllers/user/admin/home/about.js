
import Settings from '../../../../../database/models/admin/settings'

class About
{

    constructor (Website)
    {
        Website.get('/about', About.view)
    }

    static view (request, result)
    {
      Settings.where('id', 1).fetch()
        .then ((settings) => {
          result.render('user/admin/home/about', {
              page   : 'Build Information',
              config : settings.toJSON()
          })
        })
    }

}
module.exports = About
