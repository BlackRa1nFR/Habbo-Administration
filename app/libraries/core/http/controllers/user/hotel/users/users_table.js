import Error from '../../../../../modules/error'
import Users from '../../../../../database/models/hotel/users/user'

export default class User
{

  constructor (http)
  {
    http.get('/hotel/users', User.list)
  }

  static list (req, res)
  {
    Users.query((qb) => { qb.orderBy('id', 'DESC').limit(25) }).fetchAll()
      .then (u => {
        res.render('session/user/hotel/users/users_table', {
          users : u.toJSON()
        })
      })
      .catch (e => {
        new Error('Hotel - Users List', e, req, 'fatal')
      })
  }

}
