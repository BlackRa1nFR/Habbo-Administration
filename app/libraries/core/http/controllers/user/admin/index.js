export default class Index {
  constructor (http) {
    http.get('/admin', Index.show)
  }

  static show (req, res) {
    res.render('session/user/admin/index')
  }
}
