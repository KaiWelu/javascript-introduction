// this is how you create an object
const testObject = {
  firstName: "Kai",
  lastName: "Weluda",
};

console.log(testObject);

//this is how classes work
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// this is how you add and access things in objects
testObject.birthplace = "Ratzeburg";
console.log(testObject.birthplace);
console.log(testObject);

//this is how you delete entries
delete testObject.birthplace;
console.log(testObject);

//this is how you loop over the content of objects
for (const property in testObject) {
  console.log(property, testObject[property]);
}

//this is a test for objects and classes

class food {
  constructor(name, calories, fat, protein, carbs) {
    this.name = name;
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
  }
}

const egg = new food("egg", 89, 6.5, 7.5, 0.4);
console.log(typeof egg);

for (const property in egg) {
  console.log(property, egg[property]);
}

//this creates an array of test objects
let testList = [];
for (let i = 0; i < 10; i++) {
  testList.push(new food("egg", 89, 6.5, 7.5, 0.4));
}
console.log(testList);
