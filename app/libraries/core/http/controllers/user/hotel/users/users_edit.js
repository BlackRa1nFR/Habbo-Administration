import Async from 'async'
import Error from '../../../../../modules/error'
import Users from '../../../../../database/models/hotel/users/user'
import Ranks from '../../../../../database/models/hotel/permissions/group'
export default class User
{

  constructor (http)
  {
    http.get('/hotel/users/:id', User.edit)
    http.post('/hotel/users/edit', User.save)
  }

  static edit (req, res)
  {

    Async.series([
      // Fetch User
      function (cb)
      {
        Users.where('id', req.params.id).fetch()
          .then (u => {
            cb(null, u.toJSON())
          })
          .catch (e => {
            cb(e)
          })
      },
      // Fetch Ranks
      function (cb)
      {
        Ranks.fetchAll()
          .then (r => {
            cb(null, r.toJSON())
          })
          .catch (e => {
            cb(e)
          })
      }
    ], ((e, r) => {

      if (!e)
      {

        if (r[0])
        {
          res.render('session/user/hotel/users/edit_user', {
            account : r[0],
            ranks   : r[1]
          })
        }
        else
        {
          res.render('common/messages/other/profile_not_found')
        }

      }
      else
      {
        res.render('common/errors/fatal')
      }

    }))

  }

  static save (req, res)
  {
    Users.where('id', req.body.id).fetch()
      .then (u => {
        if (u)
        {
          u.set('username', req.body.username)
          u.set('rank', req.body.rank)
          u.set('vip', req.body.vip)
          u.set('credits', req.body.credits)
          u.set('activity_points', req.body.activity_points)
          u.save()
          res.redirect('back')
        }
        else
        {
          res.render('common/messages/other/profile_not_found')
        }

      })
      .catch (e => {
        new Error('Hotel - User Editing', e, req, 'fatal')
      })
  }

}
