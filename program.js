

var fs = require('fs');

var myfile = process.argv[2] || 'mytext.txt';
var buffer = fs.readFileSync(myfile);
var str = buffer.toString().split('\n').length - 1;

console.log(breakcount);
