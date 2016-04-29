var fs = require('fs')


var buffer = fs.readFileSync(process.argv[2]);
var strArray = buffer.toString().split('\n');

console.log(strArray.length - 1);

