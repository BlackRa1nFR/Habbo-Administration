'use strict';

import users from '../../../../../database/models/admin/users/user';
import Error from '../../../../../libraries/error';

class Users
{

    constructor (Website)
    {
        Website.get('/admin/customize/users', Users.view);
    }

    static view (request, result)
    {
        users.fetchAll({ withRelated : ['group'] })
            .then ((results) =>
            {
                result.render('user/admin/customize/users', {
                    page  : 'User Management',
                    users : results.toJSON()
                });
            })
            .catch ((error) =>
            {
                new Error(false, error);
                result.render('errors/500');
            })
    }

}
module.exports = Users;