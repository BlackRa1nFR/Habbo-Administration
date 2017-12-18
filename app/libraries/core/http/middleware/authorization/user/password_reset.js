export default class Reset
{

  constructor (http)
  {
    http.use(Reset.do)
  }

  static do (req, res, n)
  {

    if (req.session.auth)
    {

      if (req.path.indexOf('settings/password') == -1)
      {

        if (req.session.auth.data.status == 'password_reset')
        {
          res.redirect('/settings/password')
        }
        else
        {
          n()
        }

      }
      else
      {
        n()
      }

    }
    else
    {
      n()
    }

  }
}
