
import Async from 'async'
import Cache from 'memory-cache'
import Errors from '../../database/models/admin/errors'
import Settings from '../../database/models/admin/settings'

class Variables
{

    constructor (Website)
    {
        Website.use(Variables.apply)
    }

    static apply (request, result, next)
    {
      Async.parallel([
        // Admin Settings
        function (callback) {
          if (!Cache.get('admin_settings'))
          {
            Settings.forge().where('id', 1).fetch()
            .then (r => {
              const settings = r.toJSON()
              Cache.put('admin_settings', settings)
              callback(null, settings)
            })
            .catch (e => {
              callback(e)
            })
          }
          else
          {
            callback(null, Cache.get('admin_settings'))
          }
        },
        // Admin Errors
        function (callback) {
          Errors.fetchAll()
            .then (r => {
              callback(null, r.toJSON())
            })
            .catch (e => {
              callback(e)
            })
        }
      ], ((errors, results) => {
        if (!errors)
        {
          result.locals.page     = 'Page'
          result.locals.settings = results[0]
          result.locals.errors   = results[1]
          result.locals.success  = request.flash('success')
          result.locals.error    = request.flash('error')
          next()
        }
        else
        {
          new Error('normal', errors)
          result.render('errors/500')
        }
      }))

    }
}
module.exports = Variables
