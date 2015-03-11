var buildify = require('buildify');
var fs = require('fs');

var packageInfo = JSON.parse(fs.readFileSync('package.json'));

buildify()
  .concat([
  	'node_modules/react/dist/react.min.js',
  	'node_modules/babel/browser.js',
  	'index.js'
  ])
  .save('./dist/codepen-react-' + packageInfo.version + '.js');
