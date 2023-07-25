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

// Return Negative - https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
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
  let sortedArray = workingArray.sort((a, b) => b - a); //only works if the input is only numbers
  let output = sortedArray.join("");
  return Number(output);
}

// Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
  let workingArray = s.split("");
  let outputArray = [];
  for (let i = 0; i < workingArray.length; i++) {
    outputArray.push(workingArray[i].repeat(i + 1));
  }
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

// Who likes this? - https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
function likes(names) {
  const workingArray = names;
  if (workingArray.length === 0) {
    return "no one likes this";
  } else if (workingArray.length === 1) {
    return workingArray[0] + " likes this";
  } else if (workingArray.length === 2) {
    return workingArray[0] + " and " + workingArray[1] + " like this";
  } else if (workingArray.length === 3) {
    return (
      workingArray[0] +
      ", " +
      workingArray[1] +
      " and " +
      workingArray[2] +
      " like this"
    );
  } else {
    return (
      workingArray[0] +
      ", " +
      workingArray[1] +
      " and " +
      (workingArray.length - 2) +
      " others like this"
    );
  }
}

// Human Readable Time - https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
function humanReadable(seconds) {
  const input = seconds;
  //this calculates the hours
  const hourRemainder = input % 3600;
  const hours = (input - hourRemainder) / 3600;
  //this calculates the minutes based on the remainder of the hours
  const minuteRemainder = hourRemainder % 60;
  const minutes = (hourRemainder - minuteRemainder) / 60;
  //seconds are just the las remainder
  const secondsOutput = minuteRemainder;
  //sanitizing the output to strings and add leading zeros
  const outputArray = [
    hours.toString(),
    minutes.toString(),
    secondsOutput.toString(),
  ];
  for (let i = 0; i < outputArray.length; i++) {
    if (outputArray[i].length < 2) {
      outputArray[i] = "0" + outputArray[i];
    }
  }

  return outputArray[0] + ":" + outputArray[1] + ":" + outputArray[2];
}

//Two Sum - https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
  const numbersArray = numbers;
  const targetNumber = target;
  for (let i = 0; i < numbersArray.length; i++) {
    for (j = i + 1; j < numbersArray.length; j++) {
      if (numbersArray[i] + numbersArray[j] === targetNumber) {
        return [i, j];
      }
    }
  }
}

// Count characters in your string - https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count(string) {
  const outputObject = {};
  // return empty object if string is empty
  if (string.length === 0) {
    return outputObject;
  }
  //create a set of unique chars in the string
  const workingSet = new Set();
  for (let i = 0; i < string.length; i++) {
    workingSet.add(string.charAt(i));
  }

  //count the chars in the string and add them to the output object
  workingSet.forEach((element) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (element === string[i]) {
        count++;
      }
    }
    outputObject[element] = count;
  });
  return outputObject;
}

// PaginationHelper - https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

const pageObject = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);

// Zip String Kata
function zipStrings(strA, strB) {
  const workingArray = [];
  let strArrayA = strA.split("");
  let strArrayB = strB.split("");
  for (let i = 0; i < strArrayA.length + strArrayB.length; i++) {
    workingArray[i] = null;
  }
  console.log(workingArray);
  for (let i = 0; i < workingArray.length; i = i + 2) {
    workingArray[i] = strArrayA[i];
  }
  for (let i = 0; i < workingArray.length; i++) {
    if (workingArray[i] === null) {
      workingArray[i] = strArrayB.shift();
    }
  }
  console.log(workingArray);
  return workingArray.join("");
}

// Counting Duplicates - https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
  text = text.toLowerCase().split("");
  const duplicateCount = [];
  const duplicateSet = new Set();
  let output = 0;

  text.forEach((char) => {
    duplicateSet.add(char);
  });

  duplicateSet.forEach((char) => {
    duplicateCount.push([char, 0]);
  });

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < duplicateCount.length; j++) {
      if (text[i] === duplicateCount[j][0]) {
        duplicateCount[j][1]++;
      }
    }
  }

  for (let i = 0; i < duplicateCount.length; i++) {
    if (duplicateCount[i][1] > 1) {
      output++;
    }
  }
  return output;
}

duplicateCount("Yolo");
