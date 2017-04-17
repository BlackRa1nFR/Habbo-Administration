
import passport from 'passport'

class Login
{

    constructor (Website)
    {
        Website.get('/login', this.get)
        Website.post('/login', passport.authenticate('login', {
            successRedirect     : '/dashboard',
            failureRedirect     : '/login',
            failureFlash        : true,
            badRequestMessage   : 'Daddy No!!'
        }))
    }

    get (request, result)
    {
        if (!request.user)
        {
            result.render('guest/login')
        }
        else
        {
            result.redirect('/dashboard')
        }
    }

}
module.exports = Login
