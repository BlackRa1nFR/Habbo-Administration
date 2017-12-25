import Async from 'async'
import Error from '../../../../../../modules/error'
import Users from '../../../../../../database/models/hotel/users/user'

export default class Search
{

  constructor (http)
  {
    http.get('/hotel/accounts/search', Search.get)
    http.post('/hotel/accounts/search', Search.do)
  }

  static get (req, res)
  {
    res.render('session/user/hotel/accounts/users/search')
  }

  static do (req, res)
  {
    Async.parallel([
      // Does User Exist?
      function (cb)
      {
        Users.where('username', req.body.username).fetch()
          .then (u => {

            if (u)
            {
              cb(null, u.toJSON())
            }
            else
            {
              cb(null)
            }

          })
          .catch (e => {
            cb(e)
          })
      },
      // Similar Users
      function (cb)
      {
        Users.where('username', 'LIKE', `%${req.body.username}%`).fetchAll({ withRelated : ['group'] })
          .then (u => {
            cb(null, u.toJSON())
          })
          .catch (e => {
            cb(e)
          })
      }
    ], ((errors, results) => {

      if (!errors)
      {

        if (results[0])
        {
          res.redirect(`/hotel/accounts/edit/${results[0].username}`)
        }
        else
        {
          res.render('session/user/hotel/accounts/users/search_results', {
            accounts : results[1]
          })
        }

      }
      else
      {
        new Error('Hotel - User Search',e, req, res, 'normal')
      }
    }))

  }

}
