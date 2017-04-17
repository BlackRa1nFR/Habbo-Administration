
import Error from '../../../../../libraries/error'
import Frontpage from '../../../../../database/models/emu/landing'

class Landing
{

    constructor (Website)
    {
      Website.get('/emu/customize/landing', Landing.view)
    }

    static view (request, result)
    {
      Frontpage.fetchAll()
        .then ((results) => {
          result.render('user/emu/customize/landing', {
            page  : 'Configure Landing',
            land  : results.toJSON()
          })
        })
        .catch ((error) => {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

}
module.exports = Landing
