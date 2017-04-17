require('babel-register')({ presets : ['es2015', 'stage-2'] });

const b = require('./actual/backup')
new b
