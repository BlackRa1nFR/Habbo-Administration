import Error from '../../../../../modules/error'
import Config from '../../../../../database/models/admin/settings'

export default class Settings
{

  constructor (http)
  {
    http.get('/admin/settings', Settings.get)
    http.post('/admin/settings', Settings.update)
  }

  static get (req, res)
  {
    Config.where('id', '1').fetch()
      .then (s => {
        res.render('session/user/admin/tools/settings', {
          config : s.toJSON()
        })
      })
      .catch (e => {
        new Error('Admin - Viewing Settings',e, req, res, 'normal')
      })
  }

  static update (req, res)
  {
    Config.where('id', '1').fetch()
      .then (s => {

        Config.where('id', '1').save({ link : req.body.link, email_address : req.body.email_address, email_password : req.body.email_password, action_logging : req.body.action_Logging, error_Logging : req.body.error_Logging, account_security : req.body.account_security, backup_task : req.body.backup_task, cloud_task : req.body.cloud_task }, { method : 'update' })
          .then (st => {
            res.redirect('/admin/settings')
          })
          .catch (e => {
            new Error('Admin - Updating Settings',e, req, res, 'normal')
          })
      })
      .catch (e => {
        new Error('Admin - Updating Settings',e, req, res, 'normal')
      })
  }

}
