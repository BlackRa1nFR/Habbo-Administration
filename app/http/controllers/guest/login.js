'use strict';

import passport from 'passport';
import Users from '../../../database/models/emulator/users/users';

class Login
{

    constructor (Website)
    {
        Website.get('/login', this.get);
        Website.post('/login', passport.authenticate('login', {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash : true
        }));
    }

    get (request, result) 
    {
        result.render('guest/login');
    }

}
module.exports = Login;