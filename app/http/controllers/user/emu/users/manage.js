import Error from '../../../../../libraries/error'
import Users from '../../../../../database/models/emu/users/users'
import Badges from '../../../../../database/models/emu/users/badges'

class Manage
{

  constructor (Website)
  {
    Website.post('/emu/users/update', Manage.update)
    Website.get('/emu/users/delete/:id', Manage.delete)
    Website.post('/emu/users/actions/badge/create', Manage.create_badge)
    Website.get('/emu/users/actions/badge/delete/:id', Manage.delete_badge)
  }

  static update (request, result)
  {
    Users.where('id', request.body.id).fetch()
      .then (user => {

        if (request.body.username != undefined)           user.set('username', request.body.username)
        if (request.body.mail != undefined)               user.set('mail', request.body.mail)
        if (request.body.motto != undefined)              user.set('motto', request.body.motto)

        if (request.body.credits != undefined)            user.set('credits', request.body.credits)
        if (request.body.activity_points != undefined)    user.set('activity_points', request.body.activity_points)
        if (request.body.vip_points != undefined)         user.set('vip_points', request.body.vip_points)
        if (request.body.gotw_points != undefined)        user.set('gotw_points', request.body.gotw_points)

        if (request.body.youtube != undefined)            user.set('youtube', request.body.youtube)
        if (request.body.about != undefined)              user.set('about', request.body.about)
        if (request.body.skype != undefined)              user.set('skype', request.body.skype)
        if (request.body.snog != undefined)               user.set('snog', request.body.snog)
        if (request.body.kik != undefined)                user.set('kik', request.body.kik)
        if (request.body.twitter != undefined)            user.set('twitter', request.body.twitter)
        if (request.body.snapchat != undefined)           user.set('snapchat', request.body.snapchat)

        user.save()

        request.flash('success', `${user.toJSON().username} has been updated`)
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static delete (request, result)
  {
    Users.where('id', request.params.id).fetch()
      .then (user => {
        if (user)
        {
          Users.delete(user.id, user.username)
          request.flash('success', `${user.toJSON().username} has been deleted`)
          result.redirect('/emu/users/overview')
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

  static create_badge (request, result)
  {
    new Badges({ user_id : request.body.user_id, badge_id : request.body.badge_id }).save()
      .then (badge => {
        request.flash('success', 'Badge has been added to user')
        result.redirect('back')
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

  static delete_badge (request, result)
  {
    Badges.where('id', request.params.id).fetch()
      .then (badge => {
        if (badge)
        {
          Badges.where('id', request.params.id).destroy()
          request.flash('success', `${badge.toJSON().badge_id} was removed from the user's inventory`)
          result.redirect('back')
        }
        else
        {
          request.flash('error', 'We could not find that badge')
          result.redirect('back')
        }
      })
      .catch (error => {
        result.render('errors/500')
        new Error('normal', error)
      })
  }

}
module.exports = Manage
