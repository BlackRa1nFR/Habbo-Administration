import Error from '../../../../../../modules/error'
import Group from '../../../../../../database/models/hotel/permissions/group'

export default class Create {
  constructor (http) {
    http.get('/hotel/groups/create', Create.get)
    http.post('/hotel/groups/create', Create.do)
  }

  static get (req, res) {
    res.render('session/user/hotel/accounts/groups/create')
  }

  static do (req, res) {
    Async.waterfall([
      // Create
      function (cb) {
        Group.save(req.body)
          .then(g => {
            cb(null)
          })
          .catch(e => {
            cb(e)
          })
      },
      // Fetch ID
      function (cb) {
        Group.query('orderBy', 'id', 'DESC').fetch()
          .then(g => {
            cb(null, g.toJSON().id)
          })
          .catch(e => {
            cb(e)
          })
      }
    ]), (errors, results) => {
      if (!errors) {
        res.redirect(`/hotel/groups/edit/${results[1]}}`)
      } else {
        new Error('Hotel - Group Creation', e, req, res, 'normal')
      }
    }
  }
}
