const arg = process.argv.slice(2,process.argv.lengh);
//console.log(Array.isArray(arg));

for (const element of arg) {
// console.log(Number(element));
// if no number are provided
  if (typeof Number(element) === "number" && Number(element) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`${element} seconds`);
    }, Number(element) * 1000);

  }
  
 
}
