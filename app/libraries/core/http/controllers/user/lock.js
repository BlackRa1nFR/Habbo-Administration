import Error from '../../../modules/error'
import Hash from 'bcrypt-nodejs'
import Session from '../../../database/models/admin/users/session'

export default class Lock
{

  constructor (http)
  {
    http.get('/lock', Lock.do)
    http.post('/lock', Lock.undo)
  }

  static do (req, res)
  {
    Session.where('id', req.session.auth.id).fetch()
      .then (s => {
        s.set('status', 'locked_by_self')
        s.save()
        req.session.auth.status = 'locked_by_self'
        res.render('common/messages/auth/locked_by_self')
      })
      .catch (e => {
        new Error('User Lock Attempt', e, req, 'normal')
      })
  }

  static undo (req, res)
  {
    if (Hash.compareSync(req.body.password, req.session.auth.data.password))
    {
      Session.where('id', req.session.auth.id).fetch()
        .then (s => {
          s.set('status', 'normal')
          s.save()
          req.session.auth.status = 'normal'
          res.redirect('/dashboard')
        })
        .catch (e => {
          new Error('User Lock Attempt', e, req, 'normal')
        })
    }
    else
    {
      res.render('common/messages/auth/locked_by_self')
    }
  }

}
