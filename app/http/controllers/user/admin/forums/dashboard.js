
import Error from '../../../../../libraries/error'
import Category from '../../../../../database/models/admin/forum/category'

class Dashboard
{

    constructor (Website)
    {
        Website.get('/admin/forums', Dashboard.view)
    }

    static view (request, result)
    {
        Category.fetchAll({ withRelated : ['latest'] })
            .then ((results) => {
                result.render('user/admin/forums/dashboard', {
                    page        : 'Staff Forums',
                    categories  : results.toJSON()
                })
            })
            .then ((error) => {
                if (error != undefined)
                {
                    new Error('normal', error)
                    result.render('errors/500')
                }
            })
    }

}
module.exports = Dashboard
