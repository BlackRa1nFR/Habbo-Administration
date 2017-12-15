// Initial Report
process.send('Installation background server is now ready')

// Global Variables
const p = require('path')
global.homeDirectory = p.join(__dirname, '..', '..', '..', '..')
global.errorMode = false

// Fire Up ES6
require('babel-register')({'presets': ['env']})
require('./boot')
