import File from 'glob'
import Child from 'child_process'
import Messages from '../core/messages'

export default class System
{

  static launch (cb)
  {
    let children = {}
    File(`${__dirname}/tasks/**/*.js`, ((e, f) => {

      if (!e)
      {
        let count = 0
        f.forEach(fi => {
          backgroundTasks[count] = fi
          children[count] = Child.fork(fi)
          count++
        })
        System.monitor(children)
        cb(null, `Background handler has launched ${f.length} tasks in the background`)
      }
      else
      {
        cb(e)
      }
    }))
  }

  static monitor (children)
  {
    Object.keys(children).forEach(c => {

      children[c].on('message', (m => {
        Messages.write(400, m)
      }))

      children[c].on('exit', (m => {
        delete backgroundTasks[c]
        Messages.write(400, `${Object.keys(backgroundTasks).length} tasks are now running in the background`)
      }))
    })
  }

}
