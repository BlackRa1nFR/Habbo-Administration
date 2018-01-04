import EJS from 'ejs'
import Async from 'async'
import Crypto from 'crypto'
import Moment from 'moment'
import Hash from 'bcrypt-nodejs'
import Error from '../../../../../../modules/error'
import Mail from '../../../../../../modules/email'
import Config from '../../../../../../database/models/admin/settings'
import Users from '../../../../../../database/models/admin/users/user'
import Reset from '../../../../../../database/models/admin/users/resets'
export default class Create {
  constructor (http) {
    http.get('/admin/accounts/create', Create.get)
    http.post('/admin/accounts/create', Create.do)
  }

  static get (req, res) {
    res.render('session/user/admin/accounts/users/create')
  }

  static do (req, res) {
    Config.forge().fetch()
      .then(c => {
        c = c.toJSON()
        Users.hasDuplicate(req.body.username, req.body.email)
          .then(i => {
            Users.forge({ username: req.body.username, email: req.body.email, position: 'New Member', created_at: Moment().format('YYYY-MM-DD HH:mm:ss') }).save()
              .then(u => {
                const pass = Crypto.randomBytes(12).toString('hex')
                u = u.toJSON()
                Async.parallel([
                  // Store first-time login
                  function (cb) {
                    Reset.forge({ user: u.id, link: pass }).save()
                    cb()
                  },
                  // Send welcome email
                  function (cb) {
                    EJS.renderFile(`${homeDirectory}/public/views/common/email/accounts/welcome_to_xhabbo.ejs`, { account: u, config: c, key: pass }, (er, da) => {
                      new Mail(u.email, da, 'Welcome to xHabbo')
                      cb()
                    })
                  }
                ], (e, i) => {
                  if (e) {
                    new Error('Admin - User Creation', e, req, res, 'normal')
                  } else {
                    res.render('session/user/admin/accounts/users/create', {
                      message: {
                        title: 'Your changes have been saved',
                        content: 'an email has been sent to your new user'
                      }
                    })
                  }
                })
              })
              .catch(e => {
                new Error('Admin - User Creation', e, req, res, 'normal')
              })
          })
          .catch(error => {
            req.flash('error', 'That email or username is already taken!')
            res.render('session/user/admin/accounts/users/create')
          })
      })
      .catch(e => {
        new Error('Admin - User Creation', e, req, res, 'normal')
      })
  }
}
