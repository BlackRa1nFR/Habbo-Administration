
import Moment from 'moment'
import Passport from 'passport'
import Hash from 'bcrypt-nodejs'
import Validator from 'validator'
import localdb from 'passport-local'
import User from './database/models/admin/users/user'
import Session from './database/models/admin/users/session'

const Local = localdb.Strategy

    // Login
    Passport.use('login', new Local({ passReqToCallback: true }, function(req, username, password, done) {
        User.where('username', username).fetch()
                .then ((user) => {

                    if (user != null)
                    {
                        user = user.toJSON()
                        if (Hash.compareSync(password, user.password))
                        {
                            new Session({ user_id : user.id, ip_address : req.headers['x-forwarded-for'] || req.connection.remoteAddress, created_at : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }).save()
                            .then ((status) => {
                                Session.where('id', status.toJSON().id).fetch({withRelated : ['user', 'user.group', 'user.habbo', 'user.notes']})
                                    .then ((session) => {
                                        done(null, session.toJSON())
                                    })
                                    .catch ((error) => {
                                        done(null, null, 'Something went wrong')
                                    })
                            })
                            .catch ((error) => {
                                done(null, null, 'Something went wrong')
                            })
                        }
                        else
                        {
                            done(null, null, 'Failed to authenticate')
                        }
                    }
                    else
                    {
                       done(null, null, 'That user does not exist')
                    }
                })
                .catch ((error) => {
                    done(null, null, 'Something went wrong')
                })
    }))

    Passport.serializeUser(function(user, done) {
        done(null, user)
    })

    Passport.deserializeUser(function(user, done) {
        Session.where('id', user.id).fetch({ withRelated : ['user', 'user.group', 'user.habbo', 'user.notes'] })
        .then ((data) => {
          User.where('id', user.user.id).save({last_active : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss") }, { method : 'update' })
          done(null, data.toJSON())
        })
        .catch ((error) => {
          user.error = true
          done(null, user)
        })

    })

module.exports = Passport
