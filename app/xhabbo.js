import Async from 'async'
import Messages from './libraries/core/messages'
import Website from './libraries/core/http/system'
import Database from './libraries/core/database/test'
import Background from './libraries/background/system'

export default class Application {
  constructor () {
    Async.parallel([
      Messages.launch,
      Database.check,
      Website.launch,
      Background.launch
    ], (e, r) => {
      Messages.write(100, r)

      if (e) {
        errorMode = true
        Messages.write(200, e)
      }
    })
  }
}
