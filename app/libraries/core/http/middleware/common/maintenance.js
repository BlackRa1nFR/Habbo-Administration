export default class Error {
  constructor (http) {
    http.use(Error.check)
  }

  static check (req, res, n) {
    if (res.locals.website.status == 'maintenance') {
      if (req.path == '/maintenance') {
        n()
      } else {
        res.redirect('/maintenance')
      }
    } else if (!errorMode) {
      n()
    } else {
      res.render('common/errors/fatal')
    }
  }
}
