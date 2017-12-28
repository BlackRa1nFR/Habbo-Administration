import Async from 'async'
import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/hotel/users/user'
import Groups from '../../../../../../database/models/hotel/permissions/group'

export default class Edit {
  constructor (http) {
    http.get('/hotel/accounts/edit/:username', Edit.get)
    http.post('/hotel/accounts/edit/:username', Edit.do)
  }

  static get (req, res) {
    Async.parallel([
      // Fetch User
      function (cb) {
        Users.where('username', req.params.username).fetch({ withRelated: ['group'] })
          .then(u => {
            if (u) {
              cb(null, u.toJSON())
            } else {
              cb('fake')
            }
          })
          .catch(e => {
            cb(e)
          })
      },
      // Fetch Groups
      function (cb) {
        Groups.fetchAll()
          .then(g => {
            cb(null, g.toJSON())
          })
          .catch(e => {
            cb(e)
          })
      }
    ], (e, r) => {
      if (!e) {
        res.render('session/user/hotel/accounts/users/edit', {
          account: r[0],
          groups: r[1]
        })
      } else {
        if (e == 'fake') {
          res.redirect('/hotel/accounts')
        } else {
          new Error('Hotel - User Editing', e, req, res, 'normal')
        }
      }
    })
  }

  static do (req, res) {
    Users.where('username', req.params.username).fetch()
      .then(u => {
        u.set('username', req.body.username)
        u.set('mail', req.body.mail)
        u.set('motto', req.body.motto)
        u.set('look', req.body.look)
        u.set('rank', req.body.rank)
        u.save()
        res.redirect('back')
      })
      .catch(e => {
        new Error('hotel - User Editing', e, req, res, 'normal')
      })
  }
}
