import Error from '../../../../../../modules/error'
import Subscription from '../../../../../../database/models/hotel/permissions/subscriptions'

export default class Edit {
  constructor (http) {
    http.get('/hotel/subscriptions/edit/:id', Edit.get)
    http.post('/hotel/subscriptions/edit/:id', Edit.do)
  }

  static get (req, res) {
    Subscription.where('id', req.params.id).fetch({ withRelated: ['members'] })
      .then(g => {
        if (g) {
          res.render('session/user/hotel/accounts/subscriptions/edit', {
            sub: g.toJSON()
          })
        } else {
          res.redirect('/hotel/groups')
        }
      })
      .catch(e => {
        new Error('Hotel - Group Editing View', e, req, res, 'normal')
      })
  }

  static do (req, res) {
    Subscription.where('id', req.body.id).save(req.body, { method: 'update' })
      .then(g => {
        res.redirect('back')
      })
      .catch(e => {
        new Error('Hotel - Group Editing', e, req, res, 'normal')
      })
  }
}
