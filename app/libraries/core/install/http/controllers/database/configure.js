import Async from 'async'
import Database from '../../../../database/install/test'
export default class Configure {
  constructor (http) {
    http.get('/database/configure', Configure.get)
    http.post('/database/configure', Configure.attempt)
  }

  static get (req, res) {
    res.render('database/configure')
  }

  static attempt (req, res) {
    const config = {
      'client': 'mysql',
      'connection': {
        'host': req.body.host,
        'user': req.body.user,
        'password': req.body.pass,
        'database': req.body.name,
        'pools': {'min': 5, 'max': 120}
      }
    }

    Database.runTests(config, (e, r) => {
      if (e) {
        res.render('errors/con-failed')
      } else {
        req.body.lastStep = '/database/prepare'
        res.redirect('/database/prepare')
      }
    })
  }
}
