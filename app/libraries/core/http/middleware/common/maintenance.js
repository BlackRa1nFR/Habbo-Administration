export default class Error
{
 
  constructor (http)
  {
    http.use(Error.check)
  }

  static check (req, res, n)
  {

    if (!errorMode)
    {
      n()
    }
    else
    {
      res.render('common/errors/fatal')
    }
  }

}
