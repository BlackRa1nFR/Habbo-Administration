import Error from '../../../../../../modules/error'
import User from '../../../../../../database/models/admin/users/user'

export default class Suspend
{

  constructor (http)
  {
    http.get('/admin/accounts/suspend/:id', Suspend.do)
  }

  static do (req, res)
  {

    User.where('id', req.params.id).fetch()
      .then (u => {

        if (u)
        {
          switch (u.toJSON().status)
          {
            case 'normal':
              u.set('status', 'account_locked').save()
              .then (i => {
                res.redirect('back')
              })
              .catch (e => {
                new Error('Admin - User Suspension',e, req, res, 'normal')
              })
            break;

            case 'account_locked':
              u.set('status', 'normal').save()
                .then (i => {
                  res.redirect('back')
                })
                .catch (e => {
                  new Error('Admin - User Suspension',e, req, res, 'normal')
                })
            break;

            case 'first_login':
              // do nothing
              res.redirect('back')
            break;

            case 'password_reset':
              // do nothing
              res.redirect('back')
            break;
          }

        }
        else
        {
          res.redirect('/adin/accounts')
        }

      })
      .catch (e => {
        new Error('Admin - User Suspension',e, req, res, 'normal')
      })
  }
}
