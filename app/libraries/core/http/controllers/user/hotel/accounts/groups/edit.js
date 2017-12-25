import Error from '../../../../../../modules/error'
import Group from '../../../../../../database/models/hotel/permissions/group'

export default class Edit
{

  constructor (http)
  {
    http.get('/hotel/groups/edit/:id', Edit.get)
    http.post('/hotel/groups/edit/:id', Edit.do)
  }

  static get (req, res)
  {
    Group.where('id', req.params.id).fetch({ withRelated : ['members'] })
      .then (g => {

        if (g)
        {
          res.render('session/user/hotel/accounts/group/edit', {
            group : g.toJSON()
          })
        }
        else
        {
          res.redirect('/hotel/groups')
        }

      })
      .catch (e => {
        new Error('Hotel - Group Editing View',e, req, res, 'normal')
      })
  }

  static do (req, res)
  {
    Groups.where('id', req.body.id).save(req.body, { method : 'update' })
      .then (g => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - Group Editing',e, req, res, 'normal')
      })
     }
}
