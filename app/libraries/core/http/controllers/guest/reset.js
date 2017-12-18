export default class Reset
{

  constructor (http)
  {
    http.get('/reset', Reset.get)
    http.post('/reset', Reset.do)
  }

  static get (req, res)
  {
    res.render('session/guest/reset')
  }

  static do (req, res)
  {
    res.render('session/guest/login', {
      message : {
        type : 'success',
        text : `If the email you specified exists in our system, we've sent a password reset link to it.`
      }
    })
  }

}
