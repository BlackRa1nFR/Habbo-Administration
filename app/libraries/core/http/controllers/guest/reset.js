import Event from '../../../events/admin/user'
import Error from '../../../modules/error'
import Users from '../../../database/models/admin/users/user'
import Keys from '../../../database/models/admin/users/resets'
import Session from '../../../database/models/admin/users/session'

export default class Reset
{

  constructor (http)
  {
    http.get('/reset', Reset.get)
    http.post('/reset', Reset.do)
    http.get('/reset/:key', Event.PasswordChangeStarted)
  }

  static get (req, res)
  {
    res.render('session/guest/reset')
  }

  static do (req, res)
  {
    Event.PasswordChangeRequested(req.body.email)
    req.flash('success', 'If the email you specified exists in our system, we\'ve sent a password reset link to it.')
    res.redirect('/login')
  }



}
