import File from 'glob'
import Async from 'async'
import Express from 'express'
import Messages from '../../messages'
import bodyParser from 'body-parser'

export default class System {
  static launch () {
    const http = Express()
    http.use(Express.static(`${homeDirectory}/public/assets`))

    Async.series([

      // Configure It
      function (cb) {
        http.use(bodyParser.urlencoded({ extended: true }))
        http.set('views', `${homeDirectory}/public/views/common/install`)
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
      }

    ], (e, r) => {
      if (e) errorMode = true

      http.get('*', (req, res) => { res.redirect('/start') })
      http.listen(8080, () => {})
    })
  }
}
