export default class Logout
{

  constructor (http)
  {
    http.get('/logout', Logout.do)
  }

  static do (req, res)
  {
    req.session.auth = null
    res.render('common/messages/auth/logout')
  }

}
