
import Error from '../../../../libraries/error'
import ErrorLogs from '../../../../database/models/admin/errors'

class Errors
{

  constructor (Website)
  {
    Website.get('/admin/errors', Errors.read)
    Website.get('/admin/errors/delete/:id', Errors.delete)
  }

  static read (request, result)
  {
    result.render('user/admin/errors', {
      page : 'Error Listing'
    })
  }

  static delete (request, result)
  {
    ErrorLogs.where('id', request.params.id).destroy()
      .then (r => {
        request.flash('success', 'The error notification has been deleted from the system logs')
        result.redirect('back')
      })
      .catch (e => {
        new Error('normal', e)
        result.render('errors/500')
      })
  }


}
module.exports = Errors
