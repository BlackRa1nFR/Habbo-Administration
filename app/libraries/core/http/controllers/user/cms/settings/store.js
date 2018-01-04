export default class Config
{

  constructor (http)
  {
    http.get('/cms/settings/store', Config.get)
  }

  static get (req, res)
  {
    res.render('session/user/cms/settings/store')
  }

}
