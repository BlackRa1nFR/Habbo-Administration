import Async from 'async'
import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/hotel/users/user'
import Groups from '../../../../../../database/models/hotel/users/permissions'

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
        if (u.toJSON().online != 1)
        {
          if (req.body.username) u.set('username', req.body.username)
          if (req.body.mail) u.set('mail', req.body.mail)
          if (req.body.motto) u.set('motto', req.body.motto)
          if (req.body.look) u.set('look', req.body.look)
          if (req.body.rank) u.set('rank', req.body.rank)
          if (req.body.credits) u.set('credits', req.body.credits.replace(',', ''))
          if (req.body.pixels) u.set('pixels', req.body.pixels.replace(',', ''))
          if (req.body.points) u.set('points', req.body.points.replace(',', ''))
          u.save()
        }
        else
        {
          req.flash('error', 'You cannot edit an user that is currently online.')
        }
        res.redirect('back')
      })
      .catch(e => {
        new Error('hotel - User Editing', e, req, res, 'normal')
      })
  }
}
