export default class Start
{

  constructor (http)
  {
    http.get('/', Start.render)
    http.get('/start', Start.render)
  }

  static render (req, res)
  {
    res.render('start')
  }

}
