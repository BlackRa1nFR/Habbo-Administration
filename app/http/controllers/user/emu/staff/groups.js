import Async from 'async'
import Error from '../../../../../libraries/error'
import Users from '../../../../../database/models/emu/users/users'
import Group from '../../../../../database/models/emu/permissions/group'
import Rights from '../../../../../database/models/emu/permissions/rights'
import Permissions from '../../../../../database/models/emu/permissions/permissions'

class Groups
{

  constructor (Website)
  {
    Website.post('/emu/staff/groups/create', Groups.create)
    Website.get('/emu/staff/groups', Groups.read)
    Website.post('/emu/staff/groups/update', Groups.update)
    Website.get('/emu/staff/groups/delete/:id', Groups.delete)
    Website.get('/emu/staff/groups/view/:id', Groups.view)
    Website.post('/emu/staff/groups/users/create', Groups.user_create)
    Website.post('/emu/staff/groups/users/update', Groups.user_update)
    Website.post('/emu/staff/groups/permissions/create', Groups.perm_create)
    Website.get('/emu/staff/groups/delete/permission/:id', Groups.perm_delete)
  }

  static create (request, result)
  {
    new Group({ name : request.body.name, description : request.body.description, hidden : request.body.hidden }).save()
      .then (group => {
        request.flash('success', `The group ${request.body.name} has been saved`)
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static read (request, result)
  {
    Group.fetchAll({ withRelated : ['members']})
      .then (groups => {
        result.render('user/emu/staff/list', {
          page    : 'Staff Groups',
          groups  : groups.toJSON()
        })
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static update (request, result)
  {
    Group.where('id', request.body.id).save({ name : request.body.name, hidden : request.body.hidden, description : request.body.description }, { method : 'update' })
      .then (groups => {
        request.flash('success', `${request.body.name} has been updated in the database`)
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static delete (request, result)
  {
    if (request.params.id != 1)
    {
      Group.where('id', request.params.id).fetch()
        .then (group => {
          Group.where('id', request.params.id).destroy()
          Users.where('rank', request.params.id).fetchAll()
            .then (users => {
              if (users.length > 0)
              {
                Users.where('rank', request.params.id).save({ rank : 1}, { method : 'update' })
              }
            })
            .catch (error => {
              result.render('errors/500')
              new Error('normal', error)
            })
          request.flash('success', `${group.toJSON().name} was deleted and it's members have been put in the user group`)
          result.redirect('/emu/staff/groups')
        })
        .catch (error => {
          result.render('errors/500')
          new Error('normal', error)
        })
      }
      else
      {
        request.flash('error', 'You cannot delete the default user group')
        result.redirect('back')
      }
  }

  static view (request, result)
  {
    Async.parallel([
      // Fetch Group
      function (callback) {
        Group.where('id', request.params.id).fetch({withRelated : ['rights', 'rights.p', 'members'] })
          .then (groups => {
            callback(null, groups.toJSON())
          })
          .catch (error => {
            callback(error)
          })
      },
      // Fetch Groups
      function (callback) {
        Group.fetchAll()
          .then (groups => {
            callback(null, groups.toJSON())
          })
          .catch (error => {
            callback(error)
          })
      },
      // Fetch Permissions
      function (callback) {
        Permissions.fetchAll()
          .then (permissions => {
            callback(null, permissions.toJSON())
          })
          .catch (error => {
            callback(error)
          })
      }
    ], ((errors, results) => {
      if (!errors)
      {
        result.render('user/emu/staff/view', {
          page        : `Customizing ${results[0].name}`,
          group       : results[0],
          groups      : results[1],
          permissions : results[2],
        })
      }
      else
      {
        result.render('errors/500')
        new Error('normal', errors)
      }
    }))
  }

  static user_create (request, result)
  {
    Users.where('username', request.body.username).fetch()
      .then (results => {
        if (results)
        {
          results.set('rank', request.body.rank)
          results.save()

          request.flash('success', `${request.body.username} has been added ${request.body.fancy_name}`)
          result.redirect('back')
        }
        else
        {
          request.flash('error', 'That user does not exist')
          result.redirect('back')
        }
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static user_update (request, result)
  {
    Users.where('id', request.body.id).save({ rank : request.body.rank }, { method : 'update' })
      .then (user =>{
        request.flash('success', `${request.body.user}'s permissions have been updated`)
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static perm_create (request, result)
  {
    if (request.body.template == 0)
    {
      Rights.where('group_id', request.body.group_id).where('permission_id', request.body.permission_id).fetchAll()
        .then (rights => {
          rights = rights.toJSON()

          if (rights.length > 0) Rights.where('group_id', request.body.group_id).where('permission_id', request.body.permission_id).destroy()

          new Rights({ group_id : request.body.group_id, permission_id : request.body.permission_id }).save()
            .then (right => {
              request.flash('success', 'Privileges have been updated')
              result.redirect('back')
            })
            .catch (error => {
              result.render('errors/500')
              new Error('normal', error)
            })
        })
      }
      else
      {
        Rights.where('group_id', request.body.template).fetchAll()
          .then (permissions => {
            permissions.toJSON().forEach((p => {
              Rights.where('group_id', request.body.group_id).where('permission_id', p.permission_id).fetch()
                .then (perms => {
                  if (!perms) new Rights({ group_id : request.body.group_id, permission_id : p.permission_id }).save()
                })
                .catch (error => {
                  result.render('errors/500')
                  new Error('normal', error)
                })
            }))
            request.flash('success', 'Privileges have been updated')
            result.redirect('back')
          })
          .catch (error => {
            result.render('errors/500')
            new Error('normal', error)
          })
      }
  }

  static perm_delete (request, result)
  {
    Rights.where('id', request.params.id).destroy()
      .then (right => {
        request.flash('success', 'Privileges have been updated')
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

}

module.exports = Groups
