import Error from '../../../../../modules/error'
import Bans from '../../../../../database/models/hotel/users/bans'

export default class Banned
{

  constructor (http)
  {
    http.get('/hotel/users/banned', Banned.get)
  }

  static get (req, res)
  {
    Bans.query((qb) => { qb.orderBy('id', 'DESC').limit(50) }).fetchAll( { withRelated : ['user'] })
      .then (b => {
        res.render('session/user/hotel/users/banned_users', {
          bans : b.toJSON()
        })
      })
      .catch (e => {
        new Error('Hotel - Banned users', e, req, 'normal')
      })
  }

}
