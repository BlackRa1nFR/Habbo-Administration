
import express from 'express'
import passport from 'passport'
import flash from 'connect-flash'
import compress from 'compression'
import body_parser from 'body-parser'
import session from 'express-session'
import cookie_parser from 'cookie-parser'

class HTTP
{

    constructor ()
    {
        // Dependencies
        const Website = express()

        // View Engine
        Website.set('views', __dirname + '/views')
        Website.set('view engine', 'ejs')

        // Middleware
        Website.use(compress())
        Website.use(express.static(home + '/public/assets', { index : 'index.html' }))
        Website.use(body_parser.urlencoded({extended:true}))
        Website.use(body_parser.json())
        Website.use(cookie_parser())

        // User Sessions
        Website.use(session({ saveUninitialized: true, resave: true, secret: 'it*SFVse', ttl : 3600, cookie: { maxAge: 3600000 * 24 * 7 } }))
        Website.use(flash())

        // Load Middleware
        require('glob').sync(__dirname + '/middleware/**/*.js').forEach (function (file) {
            const Class = require(file)
            new Class(Website)
        })

        // Load Routes
        require('glob').sync(__dirname + '/controllers/**/*.js').forEach (function (file) {
            const Class = require(file)
            new Class(Website)
        })

        Website.get('/*', function (request, result) { return result.redirect('/start') })
        Website.post('/*', function (request, result) { return result.redirect('/start') })

        Website.listen(80, '0.0.0.0')
        console.log('Install is running on port 80')
    }

}

module.exports = HTTP
