import Async from 'async'
import EJS from 'ejs'
import Mail from '../../modules/email'
import Website from '../../database/models/admin/settings'
import Users from '../../database/models/admin/users/user'
import Resets from '../../database/models/admin/users/resets'
import Sessions from '../../database/models/admin/users/session'

export default class User {
  static EmailWasChanged (id, email) {

    // Send email to old email
    // Send email to new email
  }

  static PasswordChangeRequested (email) {
    Async.waterfall([
      // Fetch User Data
      function (cb) {
        Users.where('email', email).fetch()
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
      // Create Reset Link
      function (user, cb) {
        Resets.addNew(user.id)
          .then(k => {
            cb(null, user, k)
          })
          .catch(e => {
            cb(e)
          })
      },
      // Get Website Configuration
      function (user, link, cb) {
        Website.getCurrent()
          .then(w => {
            cb(null, user, link, w)
          })
          .catch(e => {
            cb(e)
          })
      },
      // Email Reset Link
      function (user, link, config, cb) {
        EJS.renderFile(`${homeDirectory}/public/views/common/email/accounts/password_reset.ejs`, { account: user, key: link, config: config }, (er, da) => {
          new Mail(user.email, da, 'Password Change Requested')
          cb(null)
        })
      }
    ], (error, result) => {
      if (error != 'fake') {
        new Error('Admin - Account Password Change Request Event', e, req, res, 'normal')
      }
    })
  }

  static PasswordChangeStarted (req, res) {
    Async.waterfall([
      // Valid Link?
      function (cb) {
        Resets.where('link', req.params.key).fetch()
          .then(r => {
            if (r) {
              cb(null, r.toJSON())
            } else {
              cb('fake')
            }
          })
          .catch(e => {
            cb(e)
          })
      },
      // Delete Link
      function (key, cb) {
        Resets.where('link', req.params.key).destroy()
          .then(r => {
            cb(null, key)
          })
          .catch(e => {
            cb(e)
          })
      },

      // Update User & Return
      function (key, cb) {
        Users.where('id', key.user).save({ status: 'password_reset' }, { method: 'update' })
          .then(u => {
            Users.where('id', key.user).fetch()
              .then(u => {
                cb(null, u.toJSON())
              })
              .catch(e => {
                cb(e)
              })
          })
          .catch(e => {
            cb(e)
          })
      },
      // Create Session
      function (user, cb) {
        Sessions.addNew(user, req.connection.remoteAddress)
          .then(s => {
            cb(null, s)
          })
          .catch(e => {
            cb(e)
          })
      },
      // Push Out
      function (session, cb) {
        cb(null, session)
      }
    ], (error, result) => {
      if (error) {
        if (error != 'fake') {
          new Error('Admin - Account Password Change Request Event', error, req, res, 'normal')
        } else {
          req.flash('error', 'We could not find that reset key')
          res.redirect('/login')
        }
      } else {
        req.session.auth = result
        res.redirect('/settings/password')
      }
    })
  }

  static SuspensionFiled (id) {

    // Send email concerning suspension
  }

  static AccountWasMade (id, email) {

    // Send welcome email
  }
}
