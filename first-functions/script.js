function welcomeMsg(name) {
  return console.log("Welcome " + name + "!");
}

function calcGrossPrice(price, taxrate) {
  return console.log(price + price * taxrate);
}

function addPositiveWithAbs(numberA, numberB) {
  return console.log(Math.abs(numberA) + Math.abs(numberB));
}

function addPositiveWithConditions(numberA, numberB) {
  if (numberA < 0) {
    numberA = numberA * -1;
  }
  if (numberB < 0) {
    numberB = numberB * -1;
  }
  console.log(numberA + numberB);
}

welcomeMsg("Kai");

calcGrossPrice(20, 0.19);
calcGrossPrice(40, 0.16);

addPositiveWithAbs(3, -5);
addPositiveWithAbs(444, 921);

addPositiveWithConditions(3, -5);
addPositiveWithConditions(444, 921);
