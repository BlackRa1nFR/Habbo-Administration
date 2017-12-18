import User from '../../../database/models/admin/users/user'
import Session from '../../../database/models/admin/users/session'

export default class Login
{

  constructor (http)
  {
    http.get('/login', Login.get)
    http.post('/login', Login.try)
  }

  static get (req, res)
  {
    res.render('session/guest/login')
  }

  static try (req, res)
  {
    User.tryLogin(req.body.username, req.body.password)
      .then (r => {
        Session.addNew(r, req.connection.remoteAddress)
          .then (s => {
            req.session.auth = s

            if (s.data.status == 'first_login')
            {
              res.redirect('/welcome')
            }
            else
            {
              res.redirect('/dashboard')
            }

          })
          .catch (e => {
            res.render('common/errors/fatal')
          })
      })
      .catch(e => {
        if (e == 'password')
        {
          res.render('session/guest/login', {
            message : {
              type : 'errors',
              text : 'Invalid password'
            }
          })
        }
        else if (e == 'fake')
        {
          res.render('session/guest/login', {
            message : {
              type : 'errors',
              text : 'Invalid username'
            }
          })
        }
        else
        {
          res.render('common/errors/fatal')
        }
      })


  }


}
