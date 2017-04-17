
import Error from '../../../../../libraries/error'
import Users from '../../../../../database/models/emu/users/users'

class View
{

  constructor (Website)
  {
    Website.get('/emu/users/view/:id', View.get)
  }

  static get (request,result)
  {
    Users.where('id', request.params.id).fetch({ withRelated : ['rank', 'duplicates', 'badges']})
      .then (user => {
        user = user.toJSON()

        result.render('user/emu/users/view', {
          page    : `Viewing ${user.username}`,
          player  : user
        })
      })
  }

}

module.exports = View;
