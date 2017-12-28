import Config from '../../../../../database/models/admin/settings'

export default class Maintenance {
  constructor (http) {
    http.get('/maintenance', Maintenance.get)
    http.get('/admin/maintenance', Maintenance.ask)
    http.post('/admin/maintenance', Maintenance.enable)
    http.post('/maintenance', Maintenance.disable)
  }

  static get (req, res) {
    if (res.locals.website.status != 'maintenance') {
      res.redirect('/dashboard')
    } else {
      res.render('common/errors/maintenance')
    }
  }

  static ask (req, res) {
    res.render('session/user/admin/home/maintenance')
  }

  static enable (req, res) {
    Config.enableMaintenance(req.body.password)
      .then(c => {
        res.redirect('/maintenance')
      })
      .catch(e => {
        res.render('session/user/admin/home/maintenance', {
          message: {
            title: 'Failed to enable maintenance',
            content: e
          }
        })
      })
  }

  static disable (req, res) {
    Config.disableMaintenance(req.body.password)
      .then(c => {
        res.redirect('/dashboard')
      })
      .catch(e => {
        res.redirect('back')
      })
  }
}
