import Async from 'async'
import Error from '../../../modules/error'
import String from '../../../modules/string'
import Errors from '../../../database/models/admin/errors'
import Settings from '../../../database/models/admin/settings'

export default class Data
{

  constructor (http)
  {
    http.use(Data.share)
  }

  static share (req, res, n)
  {

    Async.parallel([
      // Fetch settings
      function (cb)
      {
        Settings.query((qb) => { qb.where('id', 1) }).fetch()
          .then (r => {
            cb(null, r.toJSON())
          })
          .catch (e => {
            cb(e)
          })
      },
      // Fetch errors
      function (cb)
      {
        Errors.query((qb) => { qb.orderBy('id', 'desc') }).fetchAll()
          .then (r => {
            cb(null, r.toJSON())
          })
          .catch (e => {
            cb(e)
          })
      }
    ], ((e, r) => {

      if (e)
      {
        console.log(e)
        new Error('Data Sharing Middleware', e, req, res, 'fatal')
      }
      else
      {
        res.locals.previous = req.header('Referer');
        res.locals.page = null
        res.locals.website = {
          name    : r[0].brand,
          page    : String.capitalize(req.path.split('/')[1]),
          errors  : r[1]
        }
        n()

      }
    }))
  }

}
