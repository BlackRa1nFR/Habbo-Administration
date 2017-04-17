
import Error from '../../../../../libraries/error'
import Section from '../../../../../database/models/admin/forum/category'
class Category
{

    constructor (Website)
    {
        Website.get('/admin/forum/:id', Category.view)
        Website.post('/admin/forums/actions/create/category', Category.create)
    }

    static view (request, result)
    {
        Section.where('id', request.params.id).fetch()
            .then ((results) => {
                results = results.toJSON()
                result.render('user/admin/forums/category', {
                    page      : `Viewing section <b>${results.title}</b>`,
                    category : results
                })
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }

    static create (request, result)
    {
        new Section({ title : request.body.title, content : request.body.content }).save()
            .then ((results) => {
                request.flash('success', `${request.body.title} has been added to the forum categories`)
                result.redirect('back')
            })
            .catch ((error) => {
                new Error('normal', error)
                result.render('errors/500')
            })
    }

}
module.exports = Category
