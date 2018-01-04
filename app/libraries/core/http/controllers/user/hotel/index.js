export default class Index {
  constructor (http) {
    http.get('/hotel', Index.show)
  }

  static show (req, res) {
    res.render('session/user/hotel/index')
  }
}
