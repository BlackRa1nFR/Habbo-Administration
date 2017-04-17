
import Moment from 'moment'
import Error from '../../../../../libraries/error'
import User from '../../../../../database/models/admin/users/user'

class Dashboard
{

    constructor (Website)
    {
        Website.get('/dashboard', this.get)
    }

    get (request, result)
    {
      User.where('last_active', '>=', Moment(Date.now()).subtract(10, 'minutes').toDate()).fetchAll({ withRelated : ['group', 'habbo'] })
        .then (users => {
          result.render('user/admin/home/dashboard', {
              page    : 'Dashboard',
              active  : users.toJSON()
          })
        })
        .catch (error => {
          result.render('errors/500')
          new Error('normal', error)
        })
    }

}
module.exports = Dashboard
