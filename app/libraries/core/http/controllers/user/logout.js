export default class Logout
{

  constructor (http)
  {
    http.get('/logout', Logout.do)
  }

  static do (req, res)
  {
    req.session.auth = null
    req.flash('success', 'You have been logged out')
    res.redirect('/login')
  }

}
