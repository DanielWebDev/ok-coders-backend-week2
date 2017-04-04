// when invoking this program from the cmd line, type $ node [filename] [name-parameter] as this does not actually prompt user, instead it displays the [name-parameter] with the 'console.log' function

var name = process.argv[2];

console.log('Hello ' + name);