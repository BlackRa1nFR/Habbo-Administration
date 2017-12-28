import Error from '../../../../../../modules/error'
import Group from '../../../../../../database/models/hotel/permissions/group'

export default class Delete {
  constructor (http) {
    http.get('/hotel/groups/delete/:id', Delete.do)
  }

  static do (req, res) {
    Group.where('id', req.params.id).destroy()
      .then(g => {
        res.redirect('/hotel/groups')
      })
      .catch(e => {
        new Error('Hotel - Group Deletion', e, req, res, 'normal')
      })
  }
}
