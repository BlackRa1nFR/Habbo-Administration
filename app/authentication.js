'use strict';

import Moment from 'moment';
import Passport from 'passport';
import Hash from 'bcrypt-nodejs';
import Validator from 'validator';
import localdb from 'passport-local';
import User from './database/models/emu/users/user';

const Local = localdb.Strategy;

    // Login  
    Passport.use('login', new Local({ passReqToCallback: true }, function(req, username, password, done) {
        User.where('username', username).fetch()
                .then ((user) => {
                    
                    if (user != null)
                    {
                        user = user.toJSON();
                        if (Hash.compareSync(password, user.password))
                        {
                            done(null, user);
                        }
                        else 
                        {
                            done(null, null, 'Failed to authenticate');
                        }
                    }
                    else 
                    {
                       done(null, null, 'That user does not exist'); 
                    }
                })
                .catch ((error) => {
                    done(null, null, 'Something went wrong');
                });
    }));

    Passport.serializeUser(function(user, done) {
        done(null, user);
    });

    Passport.deserializeUser(function(user, done) {
        User.where('id', user.id).fetch()
            .then ((user) => {
                done(null, user.toJSON());
            })
            .catch ((error) => {
                done('Something went wrong');
            });
    });

module.exports = Passport;