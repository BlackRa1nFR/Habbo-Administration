// Variables
global.homeDirectory = __dirname
global.timeLaunched = Date.now()
global.errorMode = false
global.backgroundTasks = {}
// Start
import Application from './app/xhabbo'
new Application()
