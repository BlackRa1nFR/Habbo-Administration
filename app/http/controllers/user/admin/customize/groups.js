
import Async from 'async'
import Validator from 'validator'
import Error from '../../../../../libraries/error'
import users from '../../../../../database/models/admin/users/user'
import groups from '../../../../../database/models/admin/permissions/groups'

class Groups
{

    constructor (Website)
    {
        Website.get('/admin/customize/groups', Groups.view)
        Website.post('/admin/customize/groups/actions/create', Groups.create)
        Website.post('/admin/customize/groups/actions/update', Groups.update)
        Website.get('/admin/customize/groups/actions/trash/query/:id', Groups.delete)
    }

    static view (request, result)
    {
      groups.fetchAll({ withRelated : ['members'] })
        .then ((results) =>
        {
          result.render('user/admin/customize/groups', {
            page    : 'Group Management',
            groups : results.toJSON()
          })
        })
        .catch ((error) =>
        {
          console.log(error)
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static create (request, result)
    {
      new groups({name : request.body.name, desc : request.body.desc }).save()
        .then ((results) => {
          request.flash('success', 'The group has been created')
          result.redirect('back')
        })
        .catch ((error) =>
        {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static update (request, result)
    {
      groups.forge().where('id', request.body.id).fetch()
        .then ((results) => {
          results.set('name', request.body.name)
          results.set('desc', request.body.desc)
          results.save()

          request.flash('success', 'The group has been updated')
          result.redirect('back')
        })
        .catch ((error) =>
        {
          new Error('normal', error)
          result.render('errors/500')
        })
    }

    static delete (request, result)
    {
      if (Validator.isNumeric(request.params.id))
      {
        Async.parallel([
          // Delete Group
          function (callback) {
            groups.forge().where('id', request.params.id).destroy()
              .then ((results) => {
                callback(null)
              })
              .catch ((error) => {
                callback(error)
              })
          },
          // Change Users In Group To 0
          function (callback) {
            users.forge().where('permission_group', request.params.id).save({ permission_group : 0 }, { method : 'update', require : false })
              .then ((results) => {
                callback(null)
              })
              .catch ((error) => {
                callback(error)
              })
          }
        ], ((errors, results) =>
        {
          if (!errors)
          {
            request.flash('success', 'The group has been deleted')
            result.redirect('back')
          }
          else
          {
            new Error('normal', errors)
            result.render('errors/500')
          }
        }))
      }
      else
      {
        request.flash('error', 'ID must be a number!')
        result.redirect('back')
      }
    }

}

module.exports = Groups
