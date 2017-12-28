import Async from 'async'
import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/admin/users/user'
import Groups from '../../../../../../database/models/admin/users/groups/group'

export default class Edit {
  constructor (http) {
    http.get('/admin/accounts/edit/:username', Edit.get)
    http.post('/admin/accounts/edit/:username', Edit.do)
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
        res.render('session/user/admin/accounts/users/edit', {
          account: r[0],
          groups: r[1]
        })
      } else {
        if (e == 'fake') {
          res.redirect('/admin/accounts')
        } else {
          new Error('Admin - User Editing', e, req, res, 'normal')
        }
      }
    })
  }

  static do (req, res) {
    Users.where('username', req.params.username).fetch()
      .then(u => {
        u.set('name', req.body.name)
        u.set('email', req.body.email)
        u.set('avatar', req.body.avatar)
        u.set('group', req.body.group)
        u.save()
        res.redirect('back')
      })
      .catch(e => {
        new Error('Admin - User Editing', e, req, res, 'normal')
      })
  }
}
