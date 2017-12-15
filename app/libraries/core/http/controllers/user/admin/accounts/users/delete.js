import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Delete
{

  constructor (http)
  {
    http.get('/admin/accounts/delete/:username', Delete.do)
  }

  static do (req, res)
  {
    Users.where('username', req.params.username).fetch()
      .then (u => {

        if (u)
        {
          u.destroy()
          res.redirect('back')
        }
        else
        {
          res.redirect('back')
        }

      })
      .catch (e => {
        new Error('Admin - User Deleting',e, req, res, 'normal')
      })
  }


}
