//Task 1 - removeItem function
function removeItem(array, position) {
  newArray = [...array]; //this makes a copy and not a reference
  newArray.splice(position - 1, 1);
  return newArray;
}

const animals = ["Dog", "Cat", "Lion"];

console.log("Task 1");

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//Task 2 sumOfCharacters function

function sumOfCharacters(array) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === typeof "") {
      count += array[i].length;
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
