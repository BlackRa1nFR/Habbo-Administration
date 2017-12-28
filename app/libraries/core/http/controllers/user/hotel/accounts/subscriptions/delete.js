import Async from 'async'
import Error from '../../../../../../modules/error'
import User from '../../../../../../database/models/hotel/users/user'
import Subscription from '../../../../../../database/models/hotel/permissions/subscriptions'

export default class Delete {
  constructor (http) {
    http.get('/hotel/subscriptions/delete/:id', Delete.do)
  }

  static do (req, res) {
    Async.waterfall([
        // Change Member Status
      function (cb) {
        Subscription.where('id', req.params.id).fetch({ withRelated: ['members'] })
            .then(s => {
              if (s) {
                s = s.toJSON()

                if (s.members) {
                  s.members.forEach(m => {
                    User.where('id', m.id).save({ rank_vip: 0}, { method: 'update' })
                      .then(u => {

                      })
                      .catch(e => {
                        cb(e)
                      })
                  })
                  cb(null)
                } else {
                  cb(null)
                }
              } else {
                cb('fake')
              }
            })
            .then(e => {
              cb(e)
            })
      },
        // Delete Subscription
      function (cb) {
        Subscription.where('id', req.params.id).destroy()
            .then(g => {
              cb(null)
            })
            .catch(e => {
              cb(e)
            })
      }
    ], (errors, results) => {
      if (!errors) {
        res.redirect('/hotel/groups')
      } else if (errors == 'fake') {
        res.redirect('/hotel/groups')
      } else {
        new Error('Hotel - Group Deletion', e, req, res, 'normal')
      }
    })
  }
}
