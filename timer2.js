const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (Number(key) <= 9 && Number(key) >= 0) {
    console.log(`Setting timmer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), 1000 * Number(key));

  } else if (key === '\u0003') {
    process.exit();
  }

});

