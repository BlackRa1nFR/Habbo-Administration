
import Moment from 'moment'
import Validator from 'validator'
import events from '../../../../database/models/cms/events'

class Events
{

    constructor (Website)
    {
        Website.get('/hotel/events/view', Events.table)
        Website.get('/hotel/events/view/:id', Events.view)
        Website.post('/hotel/events/actions/create', Events.create)
    }

    static table (request, result)
    {
        events.forge().query(function (qb) { qb.orderBy('ends_at') }).fetchAll({ withRelated : ['author'] })
            .then ((results) =>
            {
                result.render('user/cms/events/table', {
                    page   : 'Hotel Events',
                    events : results.toJSON().reverse()
                })

            })
            .catch ((error) =>
            {
                result.render('errors/500')
            })
    }

    static view (request, result)
    {
        if (Validator.isNumeric(request.params.id))
        {
            events.where('id', request.params.id).fetch()
                .then ((event) =>
                {
                    if (event)
                    {
                        event = event.toJSON()
                        result.render('user/cms/events/view', {
                            page: `Viewing event ${event.title}`,
                            event: event
                        })
                    }
                    else
                    {
                        request.flash('error', 'That not a valid event ID!')
                        return result.redirect('/hotel/events/view')
                    }
                })
                .catch ((error) =>
                {
                    request.flash('error', 'Something went wrong')
                    result.redirect('back')
                })
        }
        else
        {
            request.flash('error', 'That not a valid event ID!')
            return result.redirect('/hotel/events/view')
        }
    }

    static create (request, result)
    {
        if (Validator.isNumeric(request.body.days))
        {
            const event = {
                user_id     : request.user.user.habbo.id,
                title       : request.body.title,
                content     : 'This needs to be changed!',
                created_at  : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                starts_at   : Moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
                ends_at     : Moment(new Date()).add(request.body.days, 'days').format("YYYY-MM-DD HH:mm:ss")
            }

            new events(event).save()
                .then((event) =>
                {
                    request.flash('success', "Don't forget to describe your event more")
                    result.redirect('/hotel/events/view/' + event.toJSON().id)
                })
                .catch ((error) =>
                {
                    request.flash('error', 'Something went wrong')
                    result.redirect('back')
                })
        }
        else
        {
            request.flash('error', 'Days has to be a number')
            return result.redirect('/hotel/events/view')
        }
    }



}
module.exports = Events
