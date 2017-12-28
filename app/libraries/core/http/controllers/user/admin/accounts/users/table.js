import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'

export default class Table {
  constructor (http) {
    http.get('/admin/accounts', Table.get)
  }

  static get (req, res) {
    Users.fetchAll({ withRelated: ['group'] })
      .then(u => {
        res.render('session/user/admin/accounts/users/table', {
          accounts: u.toJSON()
        })
      })
      .catch(e => {
        new Error('Admin - Users Table', e, req, res, 'normal')
      })
  }
}
