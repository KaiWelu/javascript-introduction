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
