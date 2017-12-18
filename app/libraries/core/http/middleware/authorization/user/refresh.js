import Error from '../../../../modules/error'
import User from '../../../../database/models/admin/users/user'

export default class Refresh
{

  constructor (http)
  {
    http.use(Refresh.do)
  }

  static do (req, res, n)
  {

    if (req.session.auth)
    {
      User.where('id', req.session.auth.user).fetch({ withRelated : ['group'] })
        .then (u => {
          u = u.toJSON()
          req.session.auth.data = u
          res.locals.user = u
          n()
        })
        .catch (e => {
          new Error('User Refresh Middleware',e, req, res, 'normal')
        })
    }
    else
    {
      n()
    }

  }

}
