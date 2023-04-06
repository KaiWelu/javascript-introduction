//oddNumbers function - Task 1
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
  return outputString;
}

console.log("Task One");

//negative test output
console.log(oddNumbers(-5, 25));

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//charCount function - Task 2
function charCount(word, char) {
  let count = 0;
  if (char.length > 1) {
    return "More than one char!";
  }
  for (index = 0; index < word.length; index++) {
    if (word[index] === char) {
      count++;
    }
  }
  return count;
}

console.log("Task 2");

console.log(charCount("KkKkKk", "ko"));
// result should be: 2

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
