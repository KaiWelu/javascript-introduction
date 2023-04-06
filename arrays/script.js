//Task 1 - removeItem function
function removeItem(array, position) {
  newArray = [...array]; //this makes a copy and not a reference
  newArray.splice(position - 1, 1);
  return newArray;
}

const ainmals = ["Dog", "Cat", "Lion"];

console.log("Task 1");

console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
