export default class Error {
  constructor (http) {
    http.use(Error.test)
  }

  static test (req, res, n) {
    if (errorMode) {
      res.render('errors/error-mode')
    } else {
      n()
    }
  }
}
