import Async from 'async'
import Error from '../../../../../../modules/error'
import Subscription from '../../../../../../database/models/hotel/permissions/subscriptions'

export default class Create {
  constructor (http) {
    http.get('/hotel/subscriptions/create', Create.get)
    http.post('/hotel/subscriptions/create', Create.do)
  }

  static get (req, res) {
    res.render('session/user/hotel/accounts/subscriptions/create')
  }

  static do (req, res) {
    Async.waterfall([
      // Fetch ID
      function (cb) {
        Subscription.query('orderBy', 'id', 'DESC').fetch()
          .then(g => {
            cb(null, g.toJSON().id)
          })
          .catch(e => {
            cb(e)
          })
      },
      // Create
      function (id, cb) {
        id = parseInt(id) + parseInt(1)
        Subscription.forge().save({ id: id, name: req.body.name, badge_code: req.body.badge_code })
          .then(g => {
            cb(null, id)
          })
          .catch(e => {
            cb(e)
          })
      }
    ], (errors, results) => {
      if (!errors) {
        res.redirect(`/hotel/subscriptions/edit/${results}`)
      } else {
        new Error('Hotel - Subscription Creation', errors, req, res, 'normal')
      }
    })
  }
}
