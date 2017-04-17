
import Async from 'async'
import Server from 'os'
import Math from 'mathjs'
import Format from 'prettysize'
import CMS from '../../../../../database/models/cms/config'
import Rooms from '../../../../../database/models/emu/rooms/room'
import Users from '../../../../../database/models/emu/users/users'

class Emergency
{

    constructor (Website)
    {
        Website.get('/admin/tools/emergency', Emergency.view)
    }

    static view (request, result)
    {
      Async.parallel([
        // Server Statistics
        function (callback) {
          const server = {
            type    : Server.type(),
            release : Server.release(),
            cpus    : {
              cores : Server.cpus().length,
              usage : Server.loadavg()[2] + '%'
            },
            ram     : {
              total : Format(Server.totalmem()),
              left  : Format(Server.freemem()),
              perc  : Math.multiply(Math.divide(Server.freemem(), Server.totalmem()), 100).toFixed(0) + '%'
            }
          }
          callback(null, server)
        },
        // Users Online
        function (callback) {
          Users.where('online', '1').fetchAll({ columns : ['id'] })
            .then (u => {
              callback(null, u.length)
            })
            .catch (e => {
              callback(e)
            })
        },
        // Rooms Active
        function (callback) {
          Rooms.where('users_now', '>', '0').fetchAll({ columns : ['id'] })
            .then (r => {
              callback(null, r.length)
            })
            .catch (e => {
              callback(e)
            })
        },
        // CMS Settings
        function (callback) {
          CMS.where('id', 1).fetch()
            .then (c => {
              callback(null, c)
            })
            .catch (e => {
              callback(e)
            })
      }
      ], ((e, r) => {
        result.render('user/admin/tools/emergency', {
            page    : 'Emergency Tools',
            server  : r[0],
            users   : r[1],
            rooms   : r[2],
            cms     : r[3]
        })
      }))
    }


}
module.exports = Emergency
