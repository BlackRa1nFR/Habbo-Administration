'use strict';

import Passport from 'passport';
import Hash from 'bcrypt-nodejs';
import Validator from 'validator';
import localdb from 'passport-local';
import User from './database/models/administration/users/user';
import Session from './database/models/administration/users/session';

const Local = localdb.Strategy;

    // Login 
    Passport.use('login', new Local({ usernameField : 'username', passwordField : 'password', pressReqToCallback : true }, function(request, username, password, done) {

        if (Validator.isAlphanumeric(username))
        {

            User.where('username', username).fetch()
                .then ((user) => {

                    if (user)
                    {
                        user = user.toJSON();

                        if (Hash.compareSync(password, user.password))
                        {
                            // Form Session 
                            new Session({ cookie_id : request.cookies.connect.sid }).save()
                                .then ((data) => {
                                    done(null, data.toJSON())
                                })
                            // 
                        }
                        else 
                        {
                            // Log Session Error 
                            done(null, null, request.flash('error', 'Could not authenticate this request'));
                        }
                    }

                });



        }
        else 
        {
            done(null, null, request.flash('error', 'Usernames can only contain letters and numbers'));
        }

    }));

    Passport.serializeUser(function(user, done) {
        done(null, user);
    });

    Passport.deserializeUser(function(user, done) {
        done(null, user);
    });

module.exports = Passport;