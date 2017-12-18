import Error from '../../../../../../modules/error'
import Groups from '../../../../../../database/models/admin/users/groups/group'

export default class List
{

  constructor (http)
  {
    http.get('/admin/groups', List.show)
  }

  static show (req, res)
  {
    Groups.fetchAll({ withRelated : ['members'] })
      .then (g => {
        res.render('session/user/admin/accounts/groups/table', {
          groups : g.toJSON()
        })
      })
      .catch (e => {
        new Error('Admin - Groups Listing',e, req, res, 'normal')
      })

  }

}
