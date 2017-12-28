export default class Guest {
  constructor (http) {
    http.use(Guest.check)
  }

  static check (req, res, n) {
    const g = ['login', 'reset']

    if (req.path && (req.path.indexOf(g[0]) > -1 || req.path.indexOf(g[1]) > -1)) {
      if (!req.session.auth) {
        n()
      } else {
        res.redirect('/dashboard')
      }
    } else {
      if (req.session.auth) {
        n()
      } else {
        res.redirect('/login')
      }
    }
  }
}
