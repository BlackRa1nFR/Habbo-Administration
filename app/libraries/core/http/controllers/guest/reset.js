import Error from '../../../modules/error'
import User from '../../../database/models/admin/users/user'

export default class Reset
{

  constructor (http)
  {
    http.get('/reset', Reset.get)
    http.post('/reset', Reset.do)
  }

  static get (req, res)
  {
    res.render('session/guest/reset')
  }

  static do (req, res)
  {

    User.doReset(req.body.email)
      .then (e => {
        req.flash('success', 'If the email you specified exists in our system, we\'ve sent a password reset link to it.')
        res.redirect('/login')
      })
      .catch (e => {
        new Error('Admin - Guest Password Reset ',e, req, res, 'normal')
      })


    req.flash('success', 'If the email you specified exists in our system, we\'ve sent a password reset link to it.')
    res.redirect('/login')
  }

}
