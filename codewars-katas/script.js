// Counting Sheep - https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

// Sum of Positive - https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Return Positive - https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num > 0) {
    num *= -1;
  }
  return num;
}

// Number of People in the Bus - https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
var number = function (busStops) {
  busStops = busStops.map((element) => element[0] - element[1]);
  let people = 0;
  for (let i = 0; i < busStops.length; i++) {
    people += busStops[i];
  }
  return people;
};

// Reversed Strings - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str) {
  let array1 = str.split("");
  array1.reverse();
  return array1.join("");
}

// Even numbers in array - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/solutions/javascript
function evenNumbers(array, number) {
  let outputArray = [];
  for (let i = array.length; i >= 0; i--) {
    if (outputArray.length < number) {
      if (array[i] % 2 === 0) {
        outputArray.unshift(array[i]);
      }
    }
  }
  return outputArray;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
