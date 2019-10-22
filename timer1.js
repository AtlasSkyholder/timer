let time = process.argv;  // takes in the array
let newTime = time.slice(2, time.length); // removes node and name of file from array
newTime.sort(function(a,b) {return a-b}); // sorts the array as ascending
let finalTime = [];
for (let j of newTime) {  // builds a new array with only numbers
  let n = parseInt(j);
  if (Number.isInteger(n)) {
    finalTime.push(j);
  }
}
let beep = 0;

for (let i = 0; i < finalTime.length; i++) {
  if (finalTime.length === 0) {  // if array is empty, it ends
    break;
  }
  if (finalTime[i] < 0) {  // if number is negative, it skips
    continue;
  }
  beep += finalTime[i] * 1000;  // here it multiplies by 1000 so each number becomes 1 second length
  setTimeout(() => {
    process.stdout.write('.');
  }, beep)
  beep = 0; // brings beep back to zero so time doesn't accumulate and take forever to loop
}