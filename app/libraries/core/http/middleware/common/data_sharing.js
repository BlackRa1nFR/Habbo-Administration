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
        new Error('Data Sharing Middleware', e, req, res, 'fatal')
      }
      else
      {
        res.locals.page = null
        res.locals.website = {
          name          : r[0].brand,
          build         : r[0].version,
          link          : r[0].link,
          status        : r[0].status,
          habbo_imager  : r[0].habbo_imager,
          habbo_images  : r[0].habbo_images,
          page          : String.capitalize(req.path.split('/')[1]),
          errors        : r[1]
        }
        n()

      }
    }))
  }

}
