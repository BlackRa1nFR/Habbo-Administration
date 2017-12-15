import Async from 'async'
import Messages from './libraries/core/messages'
import Website from './libraries/core/http/system'
import Install from './libraries/core/install/system'
import Database from './libraries/core/database/test'
import Background from './libraries/background/system'
export default class Application
{
  constructor ()
  {
    Async.parallel([
      Messages.launch,
      Install.check,
      Database.check,
      Website.launch,
      Background.launch
    ], ((e, r) => {

      Messages.write(100, r)

      console.log('\n\n\nCopy digital ocean design for admin panel!')

      if (e)
      {
        errorMode = true
        Messages.write(200, e)
      }

    }))
  }

}
