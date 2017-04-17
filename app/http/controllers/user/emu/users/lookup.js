
import Async from 'async'
import Cache from 'memory-cache'
import Error from '../../../../../libraries/error'
import Database from '../../../../../database/server'
import Users from '../../../../../database/models/emu/users/users'

class Lookup
{

    constructor (Website)
    {
      Website.get('/emu/users/lookup', Lookup.view)
      Website.post('/emu/users/lookup', Lookup.search)
    }

    static view (request, result)
    {
      Async.parallel([
        Lookup.getEvading,
        Lookup.getDuplicates,
        Lookup.getSearches
      ], ((errors, results) => {
        result.render('user/emu/users/lookup', {
          page        : 'User Lookup',
          evading     : results[0],
          duplicates  : results[1],
          searches    : results[2]
        })
      }))
    }

    static search (request, result)
    {
      Users.where('username', 'LIKE', `${request.body.query}%`).fetchAll({ withRelated : ['rank'] })
        .then (users => {
          result.render('user/emu/users/results', {
            page    : `Search Results For ${request.body.query}`,
            query   : request.body.query,
            users   : users.toJSON()
          })
        })
    }



    /* View Rendering Functions For Evades, Duplicates, Etc */
    static getEvading (callback)
    {
      callback(null, null)
    }

    static getDuplicates (callback)
    {
      callback(null, null)
      /*
      Database.knex.raw('SELECT ip_last FROM users GROUP BY ip_last HAVING count(*) > 1')
      .then ((dup) => {
        const duplicates = []
        dup[0].forEach((d) => {
          Users.where('ip_last', d.ip_last).fetchAll({columns : ['username']})
            .then ((users) => {
              let user = {}
              user[d.ip_last] = users
              duplicates.push(user)
            })
        })
      })
      */
    }

    static getSearches (callback)
    {
      callback(null, null)
    }

}
module.exports = Lookup
