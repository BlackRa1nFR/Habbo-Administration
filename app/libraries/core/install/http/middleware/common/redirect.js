export default class Redirect
{

  constructor (http)
  {
    http.use(Redirect.handler)
  }

  static handler (req, res, n)
  {
    // Redirect if no route is assigned "/"
    if (req.path != '/')
    {
      n()
    }
    else
    {
      if (req.session)
      {
        res.redirect(`/${req.session.lastStep}`)
      }
      else
      {
        res.redirect('/start')
      }
    }
  }

}
