import Error from '../../../../../../modules/error'
import Groups from '../../../../../../database/models/admin/users/groups/group'
export default class Table
{

  constructor (http)
  {
    http.get('/admin/groups', Table.get)
  }

  static get (req, res)
  {
    Groups.fetchAll({ withRelated : ['members'] })
      .then (g => {
        res.render('session/user/admin/accounts/groups/table', {
          groups : g.toJSON()
        })
      })
      .catch (e => {
        new Error('Admin - Group Viewing',e, req, res, 'normal')
      })
  }

}
