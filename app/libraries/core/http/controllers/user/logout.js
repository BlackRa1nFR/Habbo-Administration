export default class Logout
{

  constructor (http)
  {
    http.get('/logout', Logout.do)
  }

  static do (req, res)
  {
    req.session.auth = null
    res.render('session/guest/login', {
      message : {
        type : 'success',
        text : 'You have been logged out'
      }
    })
  }

}
