import Keys from '../../../database/models/admin/users/resets'
import Session from '../../../database/models/admin/users/session'

export default class Welcome {
  constructor (http) {
    http.get('/login/:pass', Welcome.do)
  }

  static do (req, res) {
    Keys.where('link', req.params.pass).fetch({ withRelated: 'user' })
      .then(k => {
        if (k) {
          Keys.where('link', req.params.pass).destroy()
          Session.addNew(k.toJSON().user, req.connection.remoteAddress)
          .then(s => {
            req.session.auth = s

            if (s.data.status == 'first_login') {
              res.redirect('/welcome')
            } else {
              res.redirect('/dashboard')
            }
          })
          .catch(e => {
            res.render('common/errors/fatal')
          })
        } else {
          res.send('u cant hang u aint gang')
        }
      })
      .catch(e => {
        res.render('common/errors/fatal')
      })
  }
}
