import File from 'fs'
import Child from 'child_process'
import Message from '../messages'
export default class System {
  static check (cb) {
    if (File.existsSync(`${homeDirectory}/app/config/install.json`)) {
      installRan = true
      cb(null, 'System has already been installed')
    } else {
      System.backgroundLaunch()
      cb(null, 'Install system is now going to run on port 8080')
    }
  }

  static backgroundLaunch () {
    const w = Child.fork(`${homeDirectory}/app/libraries/core/install/manager`)

    w.on('message', m => {
      Message.write(400, m)
    })

    w.on('exit', e => {
      installRan = true
      Message.write(400, 'Installation has finished')
    })
  }
}
