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

// Get the middle character - https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  let array = s.split("");
  if (array.length % 2 === 0) {
    let start = array.length / 2 - 1;
    array = array.slice(start, start + 2);
  } else {
    let start = Math.floor(array.length / 2);
    array = array.slice(start, start + 1);
  }
  let output = array.join("");
  return output;
}

// Isograms - https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
function isIsogram(str) {
  str = str.toLowerCase();
  let array = str.split("");
  if (array.length <= 0) {
    return true;
  }
  let endpoint = array.length;
  for (let i = 0; i < endpoint; i++) {
    let temp = array[0];
    console.log(temp);
    array.shift();
    if (array.includes(temp) === true) {
      return false;
    }
  }
  return true;
}

// Vowel Count - https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  let array = str.split("");
  let count = 0;
  let vowelArray = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < vowelArray.length; j++) {
      if (array[i] === vowelArray[j]) {
        count++;
      }
    }
  }

  return count;
}

// String Repeat - https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  return s.repeat(n);
}

// Descending Order - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  let castedString = n.toString();
  let workingArray = castedString.split("");
  let sortedArray = workingArray.sort((a, b) => b - a);
  let output = sortedArray.join("");
  return Number(output);
}

// Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
  let workingArray = s.split("");
  //repeating the chars
  let outputArray = [];
  for (let i = 0; i < workingArray.length; i++) {
    outputArray.push(workingArray[i].repeat(i + 1));
  }
  //sanitizing lower and upper case
  for (let i = 0; i < outputArray.length; i++) {
    outputArray[i] =
      outputArray[i][0].toUpperCase() +
      outputArray[i].substring(1, outputArray[i].length).toLowerCase();
  }
  let output = outputArray.join("-");
  return output;
}

// Credit Card Mask - https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
function maskify(cc) {
  let workingArray = cc.split("");
  workingArray.forEach((elem, index) => {
    if (index < workingArray.length - 4) {
      console.log(elem);
      workingArray[index] = "#";
    }
  });
  return workingArray.join("");
}

// Remove First and Last Letter - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
  let workingArray = str.split("");
  workingArray.pop();
  workingArray.shift();
  return workingArray.join("");
}

// Highest and Lowest - https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
  let workingArray = numbers.split(" ");
  workingArray.sort((a, b) => a - b);
  const high = workingArray[workingArray.length - 1];
  const low = workingArray[0];
  return high + " " + low;
}
