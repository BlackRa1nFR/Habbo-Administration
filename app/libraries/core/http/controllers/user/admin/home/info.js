export default class Info {
  constructor (http) {
    http.get('/info', Info.get)
  }

  static get (req, res) {
    res.render('session/user/admin/home/info')
  }
}
