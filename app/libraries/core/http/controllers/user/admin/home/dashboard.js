export default class Dashboard
{

  constructor (http)
  {
    http.get('/dashboard', Dashboard.render)
  }

  static render (req, res)
  {
    res.render('session/user/admin/home/dashboard')
  }

}
