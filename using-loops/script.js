//oddNumbers function
function oddNumbers(numberStart, numberEnd) {
  let outputString;
  for (numberStart; numberStart < numberEnd + 1; numberStart++) {
    if (numberStart >= 0 && numberStart % 2 !== 0) {
      if (outputString === undefined) {
        outputString = numberStart;
      } else {
        outputString += "," + numberStart;
      }
    }
  }
  return console.log(outputString);
}

oddNumbers(-5, 25);

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
