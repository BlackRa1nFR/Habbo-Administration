import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Edit
{

  constructor (http)
  {
    http.get('/admin/accounts/edit/:username', Edit.get)
    http.post('/admin/accounts/edit/:username', Edit.do)
  }

  static get (req, res)
  {
    Users.where('username', req.params.username).fetch()
      .then (u => {
        res.render('session/user/admin/accounts/users/edit', {
          account : u.toJSON()
        })
      })
      .catch (e => {
        new Error('Admin - User Editing',e, req, res, 'normal')

      })
  }

  static do (req, res)
  {
    Users.where('username', req.params.username).fetch()
      .then (u => {
        u.set('name', req.body.name)
        u.set('email', req.body.email)
        u.set('avatar', req.body.avatar)
        u.set('position', req.body.position)
        u.save()
        res.redirect('back')
      })
      .catch (e => {
        new Error('Admin - User Editing',e, req, res, 'normal')
      })
  }

}
