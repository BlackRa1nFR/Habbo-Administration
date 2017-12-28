export default class Errors {
  constructor (http) {
    http.use(Errors.check)
  }

  static check (req, res, n) {
    res.locals.errors = []
    n()
  }
}
