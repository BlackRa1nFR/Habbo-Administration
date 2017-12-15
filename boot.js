// Variables
global.homeDirectory = __dirname
global.timeLaunched = Date.now()
global.errorMode = false
global.backgroundTasks = {}
global.installRan = false
// Start
import Application from './app/xhabbo'
new Application
