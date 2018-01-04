import Hash from 'bcrypt-nodejs'
export default class Locked {
  constructor (http) {
    http.use(Locked.check)
  }

  static check (req, res, n) {
    if (req.session.auth) {
      if (req.path.indexOf('logout') == -1) {
        if (req.path.indexOf('lock') == -1) {
          if (req.session.auth.status == 'locked_by_self') {
            res.redirect('/lock')
          } else {
            n()
          }
        } else {
          n()
        }
      } else {
        n()
      }
    } else {
      n()
    }
  }
}
