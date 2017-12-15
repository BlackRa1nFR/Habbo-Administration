import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Search
{

  constructor (http)
  {
    http.post('/admin/accounts/search', Search.do)
  }

  static do (req, res)
  {
    Users.where('username', 'LIKE', `%${req.body.username}%`).fetchAll()
      .then (u => {
        res.render('session/user/admin/accounts/users/search', {
          query    : req.body.username,
          accounts : u.toJSON()
        })
      })
      .catch (e => {
        new Error('Admin - User Searching',e, req, res, 'normal')
      })
  }
}
