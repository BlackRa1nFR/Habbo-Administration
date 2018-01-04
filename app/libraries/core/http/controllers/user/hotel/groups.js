import Error from '../../../../modules/error'
import Groups from '../../../../database/models/hotel/users/permissions'

export default class Group
{

  constructor (http)
  {
    http.get('/hotel/groups', Group.table)
    http.get('/hotel/groups/edit/:id', Group.view)
    http.post('/hotel/groups/edit/:id', Group.update)
    http.get('/hotel/groups/create', Group.viewCreate)
    http.post('/hotel/groups/create', Group.create)
    http.get('/hotel/groups/delete/:id', Group.delete)
    http.post('/hotel/groups/member/create', Group.addMember)
    http.get('/hotel/groups/member/remove/:username', Group.removeMember)
  }

  static table (req, res)
  {
    Groups.retrieve()
      .then (g => {
        res.render('session/user/hotel/accounts/groups/table', {
          groups : g
        })
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }

  static view (req, res)
  {
    Groups.retrieve(req.params.id)
      .then (g => {
        res.render('session/user/hotel/accounts/groups/edit', {
          group : g
        })
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }

  static update (req, res)
  {
    Groups.update(req.body)
      .then (g => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }

  static viewCreate (req, res)
  {
    res.render('session/user/hotel/accounts/groups/create')
  }

  static create (req, res)
  {
    Groups.create(req.body)
      .then (g => {
        res.redirect(`/hotel/groups/edit/${g}`)
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }

  static delete (req, res)
  {
    Groups.delete(req.params.id)
      .then (g => {
        res.redirect('/hotel/groups')
      })
  }

  static addMember (req, res)
  {
    Groups.manageTeam(req.body.username, 'add', req.body.id)
      .then (g => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }

  static removeMember (req, res)
  {
    Groups.manageTeam(req.params.username, 'remove')
      .then (g => {
        res.redirect('back')
      })
      .catch (e => {
        new Error('Hotel - Permission Groups', e, req, res, 'normal')
      })
  }



}
