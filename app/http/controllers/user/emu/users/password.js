import Crypto from 'crypto'
import Cache from 'memory-cache'
import Mail from 'nodemailer'
import Error from '../../../../../libraries/error'
import Users from '../../../../../database/models/emu/users/users'

class Password
{

  constructor (Website)
  {
    Website.get('/emu/users/password', Password.read)
    Website.post('/emu/users/password', Password.update)
  }

  static read (request, result)
  {
    result.render('user/emu/users/password', {
      page : 'Password Reset'
    })
  }

  static update (request, result)
  {
    Users.where('username', request.body.username).fetch()
      .then (user => {

        const password = Crypto.randomBytes(64).toString('hex')
        user.set('password', password)
        user.save()

        user = user.toJSON()
        const settings = Cache.get('admin_settings')

        let Transporter = Mail.createTransport({
          server : 'gmail',
          auth   : {
            user : settings.gmail_user,
            pass : settings.gmail_pass
          }
        })

        let options = {
          from      : `"${settings.short_branding}" <${settings.gmail_user}>`,
          to        : user.mail,
          subject   :  `Password Reset`,
          text      : null,
          html      : `A password reset was requested for <b>${user.username}</b><br><br><b>New Password</b> ${password}`
        }

        Transporter.sendMail(options, ((error, info) => {
          if (!error)
          {
            request.flash('success', `A password reset was sent to ${user.username}'s email`)
            result.redirect('back')
          }
          else
          {
            request.flash('error', `The hotel developer needs to setup email fowarding (Error Code: ${error.code})`)
            result.redirect('back')
          }
        }))

      })
  }

}
module.exports = Password
