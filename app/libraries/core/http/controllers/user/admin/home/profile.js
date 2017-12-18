import Error from '../../../../../modules/error'
import User from '../../../../../database/models/admin/users/user'

export default class Profile
{

  constructor (http)
  {
    http.get('/profile/:username', Profile.get)
  }

  static get (req, res)
  {
    User.where('username', req.params.username).fetch({ withRelated : ['group'] })
      .then (u => {
        if (u)
        {
          res.render('session/user/admin/home/profile', {
            account : u.toJSON(),
            results : null
          })
        }
        else
        {
          User.where('username', 'LIKE', `${req.params.username}%`).fetchAll({ withRelated : ['group'] })
            .then (u => {
              res.render('session/user/admin/home/profile', {
                account  : null,
                results  : u.toJSON()
              })
            })
            .catch (e => {
              new Error('Admin - Viewing Profile',e, req, res, 'normal')
            })
        }
      })
      .catch (e => {
        new Error('Admin - Viewing Profile',e, req, res, 'normal')
      })
  }

}
