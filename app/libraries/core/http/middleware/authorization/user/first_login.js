export default class Welcome {
  constructor (http) {
    http.use(Welcome.do)
  }

  static do (req, res, n) {
    if (req.session.auth) {
      if (req.path.indexOf('welcome') == -1) {
        if (req.session.auth.data.status == 'first_login') {
          res.redirect('/welcome')
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
