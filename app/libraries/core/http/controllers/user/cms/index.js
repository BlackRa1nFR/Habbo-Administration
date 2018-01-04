export default class Index {
  constructor (http) {
    http.get('/cms', Index.get)
  }

  static get (req, res) {
    res.render('session/user/cms/index')
  }
}
