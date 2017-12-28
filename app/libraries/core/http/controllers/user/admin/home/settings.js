import Hash from 'bcrypt-nodejs'
import Error from '../../../../../modules/error'
import Users from '../../../../../database/models/admin/users/user'

export default class Settings {
  constructor (http) {
    http.get('/settings', Settings.get)
    http.post('/settings', Settings.update)
    http.get('/settings/password', Settings.changePassword)
    http.post('/settings/password', Settings.updatePassword)
  }

  static get (req, res) {
    res.render('session/user/admin/home/settings')
  }

  static update (req, res) {
    Users.where('id', req.session.auth.user).fetch()
      .then(u => {
        u.set('avatar', req.body.avatar)

        if (req.body.new_password) {
          if (Hash.compareSync(req.body.old_password, u.toJSON().password)) {
            u.set('password', Hash.hashSync(req.body.new_password))
            req.flash('success', 'Password was updated')
          } else {
            req.flash('error', 'Failed to change password due to auth fail')
          }
        }

        u.save()

        res.redirect('/settings')
      })
  }

  static changePassword (req, res) {
    if (req.session.auth.data.status != 'password_reset') {
      res.redirect('/dashboard')
    } else {
      res.render('session/user/admin/home/password_change')
    }
  }

  static updatePassword (req, res) {
    if (req.body.password == req.body.password_new) {
      Users.updatePassword(req.session.auth.user, req.body.password)
        .then(u => {
          res.redirect('/dashboard')
        })
        .catch(e => {
          new Error('Admin - Password Change Process', e, req, res, 'normal')
        })
    } else {
      req.flash('message', 'Your passwords don\'t match.')
      res.redirect('/settings/password')
    }
  }
}
