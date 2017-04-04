// when invoking this program from the cmd line, type $ node [filename] --name=[name-parameter] as this does not actually prompt user, instead it displays the [name-parameter] with the 'console.log' function

// 'minimist' will parse the arguments list, note it must be installed though
// will slice off first two parameters
// also will treat the name property as a string parameter instead of boolean
var args = require('minimist')(process.argv.slice(2),{ string: 'name' });

var name = args.name;

console.log('Hello ' + name);
