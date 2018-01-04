import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/hotel/users/user'

export default class Table {
  constructor (http) {
    http.get('/hotel/accounts', Table.get)
    http.get('/hotel/accounts/:page', Table.getPage)
  }

  static get (req, res) {
    Users.fetchPage({withRelated: ['group'], page: 1, pageSize: 5})
      .then(u => {
        res.render('session/user/hotel/accounts/users/table', {
          accounts: u.toJSON(),
          skip: 2
        })
      })
      .catch(e => {
        new Error('Hotel - Users Table', e, req, res, 'normal')
      })
  }

  static getPage (req, res) {
    Users.fetchPage({withRelated: ['group'], page: req.params.page, pageSize: 5})
      .then(u => {
        res.render('session/user/hotel/accounts/users/table', {
          accounts: u.toJSON(),
          skip: parseInt(req.params.page) + parseInt(1)
        })
      })
      .catch(e => {
        new Error('Hotel - Users Table', e, req, res, 'normal')
      })
  }
}
