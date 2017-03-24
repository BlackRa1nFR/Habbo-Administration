'use strict';

import Async from 'async';
import Validator from 'validator';
import Error from '../../../../../libraries/error';
import users from '../../../../../database/models/admin/users/user';
import groups from '../../../../../database/models/admin/permissions/groups';

class Users
{

    constructor (Website)
    {
        Website.get('/admin/customize/users', Users.view);
        Website.post('/admin/customize/users/actions/create', Users.create);
        Website.post('/admin/customize/users/actions/update', Users.update);
        Website.get('/admin/customize/users/actions/trash/query/:id', Users.delete);
    }

    static view (request, result)
    {
      Async.parallel([Users.fetchUsers, Users.fetchGroups ], ((errors, results) =>
      {

        if (!errors)
        {
          result.render('user/admin/customize/users', {
              page   : 'User Management',
              users  : results[0],
              groups : results[1]
          });
        }
        else
        {

          new Error('regular', errors);
          result.render('errors/500');
        }

      }));
    }

    static create (request, result)
    {
      const user = {
        username            : request.body.username,
        permission_group    : request.body.permission_group,
        full_name           : request.body.full_name,
        position            : request.body.position
      };
      new users(user).save()
        .then ((results) => {
          request.flash('success', 'The user has been created!');
          result.redirect('back');
        })
        .catch ((error) => {
          new Error('regular', error);
          result.render('errors/500');
        })
    }

    static update (request, result)
    {
      users.forge().where('id', request.body.id).fetch()
        .then ((results) => {
          results.set('username', request.body.username);
          results.set('permission_group', request.body.permission_group);
          results.set('full_name', request.body.full_name);
          results.set('position', request.body.position);
          results.save();

          request.flash('success', 'The user has been updated!');
          result.redirect('back');
        })
        .catch ((error) => {
          new Error('normal', error);
          result.render('errors/500');
        });
    }

    static delete (request, result)
    {
      if (Validator.isNumeric(request.params.id))
      {
        users.forge().where('id', request.params.id).destroy()
          .then ((results) =>
          {
            request.flash('success', 'The user account has been deleted');
            result.redirect('back');
          })
          .catch ((error) => {
            new Error('normal', error);
            result.render('errors/500');
          })
      }
      else
      {
        request.flash('error', 'ID must be a number!');
        result.redirect('back');
      }
    }

    static fetchUsers (callback)
    {
      users.fetchAll({ withRelated : ['group'] })
        .then ((results) => {
          callback(null, results.toJSON());
        })
        .catch ((errors) => {
          callback(errors);
        });
    }

    static fetchGroups (callback)
    {
      groups.fetchAll()
        .then ((results) => {
          callback(null, results.toJSON());
        })
        .catch ((errors) => {
          callback(errors);
        });
    }

}
module.exports = Users;
