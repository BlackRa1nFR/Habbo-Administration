import File from 'glob'
import Async from 'async'
import Express from 'express'
import Body from 'body-parser'
import Flash from 'req-flash'
import Redis from 'connect-redis'
import Messages from '../messages'
import Cookies from 'cookie-parser'
import Error from '../modules/error'
import Session from 'express-session'

export default class System {
  static launch (cb) {
    const http = Express()
    http.use(Express.static(`${homeDirectory}/public/assets`))

    Async.series([

      // Configure It
      function (cb) {
        http.use(Body.urlencoded({ extended: true }))
        http.use(Cookies())
        const redis = new Redis(Session)
        http.use(Session({ store: new redis(), saveUninitialized: true, resave: true, secret: 'it*SFVse', ttl: 3600, cookie: { maxAge: 3600000 * 24 * 7 } }))
        http.use(Flash({ locals: 'flash' }))
        http.set('views', `${homeDirectory}/public/views`)
        http.set('view engine', 'ejs')
        cb()
      },

      // Load Middleware
      function (cb) {
        File(`${__dirname}/middleware/**/*.js`, (e, f) => {
          if (!e) {
            f.forEach((fi) => {
              const c = require(fi).default
              new c(http)
            })
            cb()
          } else {
            cb(e)
          }
        })
      },

      // Load Controllers
      function (cb) {
        File(`${__dirname}/controllers/**/*.js`, (e, f) => {
          if (!e) {
            f.forEach(fi => {
              const c = require(fi).default
              new c(http)
            })
            cb()
          } else {
            cb(e)
          }
        })
      },

      // Define 404
      function (cb) {
        http.get('*', Error.toss)
        cb()
      }

    ], (e, r) => {
      if (e) errorMode = true

      http.listen(8080, () => {
        cb(null, `HTTP server started in ${Date.now() - timeLaunched}ms`)
      })
    })
  }
}
