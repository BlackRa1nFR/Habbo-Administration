import Async from 'async'
import Error from '../../../../../../modules/error'
import Groups from '../../../../../../database/models/hotel/permissions/group'
import Subscriptions from '../../../../../../database/models/hotel/permissions/subscriptions'

export default class Table {
  constructor (http) {
    http.get('/hotel/groups', Table.get)
  }

  static get (req, res) {
    Async.parallel([
      // Groups
      function (cb) {
        Groups.fetchAll({ withRelated: ['members'] })
          .then(g => {
            cb(null, g.toJSON())
          })
          .catch(e => {
            cb(e)
          })
      },
      // Staff
      function (cb) {
        Groups.where('staff', 1).fetchAll({ withRelated: ['members'] })
          .then(g => {
            cb(null, g.toJSON())
          })
          .catch(e => {
            cb(e)
          })
      },
      // Subscriptions
      function (cb) {
        Subscriptions.fetchAll({ withRelated: ['members'] })
          .then(g => {
            cb(null, g.toJSON())
          })
          .catch(e => {
            cb(e)
          })
      }
    ], (errors, results) => {
      if (!errors) {
        res.render('session/user/hotel/accounts/groups/table', {
          groups: results[0],
          staff: results[1],
          vip: results[2]
        })
      } else {
        new Error('Hotel - Group Listing', errors, req, res, 'normal')
      }
    })
  }
}
