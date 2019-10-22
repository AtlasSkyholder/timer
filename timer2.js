const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout

let uniNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
if (key === '\u0062') {
  process.stdout.write('.');
}

console.log(uniNumber.indexOf(key))
if (uniNumber.indexOf(key) !== -1) {
  process.stdout.write("Setting timer for " + key + " seconds.");
  setTimeout(() => {process.stdout.write(".");}, key * 1000);
}
  
});

console.log('after callback');