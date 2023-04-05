// Task 1
const size = 25;
let result;

if (size > 10 && size < 25) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//Task 2
function oddEven(numberInput) {
  numberInput = Math.abs(numberInput);
  if (numberInput % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//Task 3
function oldYoung(numberInput) {
  if (numberInput < 0 || typeof numberInput !== typeof 42) {
    return "invalid parameter";
  } else if (numberInput < 16) {
    return "children";
  } else if (numberInput < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
