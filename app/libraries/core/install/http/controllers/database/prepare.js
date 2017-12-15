import Async from 'async'
import Database from '../../../../database/install/prepare'
export default class Prepare
{

  constructor (http)
  {
    http.get('/database/prepare', Prepare.get)
    http.get('/database/prepare/run', Prepare.do)
  }

  static get (req, res)
  {
    res.render('database/prepare')
  }

  static do (req, res)
  {
    Async.series([
      Database.runQueries
    ], ((e, r) => {

      if (!e)
      {
        req.body.lastStep = '/user/setup'
        res.redirect('/user/setup')
      }
      else
      {
        res.render('errors/query-failed')
      }

    }))

  }

}
