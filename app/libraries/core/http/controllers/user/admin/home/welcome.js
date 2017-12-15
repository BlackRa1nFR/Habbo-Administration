import Hash from 'bcrypt-nodejs'
import User from '../../../../../database/models/admin/users/user'

export default class Welcome
{

  constructor (http)
  {
    http.get('/welcome', Welcome.get)
    http.post('/welcome', Welcome.update)
  }

  static get (req, res)
  {
    res.render('session/user/admin/home/welcome')
  }

  static update (req, res)
  {
    User.where('id', req.session.auth.user).fetch()
      .then (u => {
        u.set('name', req.body.name)
        u.set('email', req.body.email)
        u.set('avatar', req.body.avatar)
        u.set('password', Hash.hashSync(req.body.password))
        u.set('status', 'normal')
        u.save()
        req.session.auth.data.status = 'normal'
        res.redirect('/dashboard')
      })
      .catch (e => {
        errorMode = true
        res.render('common/errors/fatal')
      })
  }

}
