//Task one (fixed)

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return name.length;
}

console.log("Task1");
console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

function isString(inputDatatype) {
  if (typeof inputDatatype === typeof "") {
    return true;
  } else {
    return false;
  }
}

console.log("Task 2");
console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
