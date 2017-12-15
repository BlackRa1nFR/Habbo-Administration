export default class Installation
{

  constructor (http)
  {
    http.use(Installation.check)
  }

  static check (req, res, n)
  {

    if (installRan)
    {
      n()
    }
    else
    {
      res.render('common/errors/install')
    }
  }
}
