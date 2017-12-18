export default class Settings
{

  constructor (http)
  {
    http.get('/settings', Settings.get)
  }

  static get (req, res)
  {
    res.render('session/user/admin/home/settings')
  }

}
