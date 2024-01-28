// Exercise Day-5-JavaScript. Zero Fuel
// Source: https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

function zeroFuelLong(distanceToPump, mpg, fuelLeft) {
  let result;
  if (distanceToPump / mpg <= fuelLeft) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function zeroFuelMedium(distanceToPump, mpg, fuelLeft) {
  let result = fuelLeft >= distanceToPump / mpg;
  return result;
}

const zeroFuelShort = (distanceToPump, mpg, fuelLeft) => distanceToPump <= fuelLeft * mpg;

console.log(zeroFuelLong(50, 25, 2));
console.log(zeroFuelLong(100, 50, 1));
console.log(zeroFuelMedium(50, 25, 2));
console.log(zeroFuelMedium(100, 50, 1));
console.log(zeroFuelShort(50, 25, 2));
console.log(zeroFuelShort(100, 50, 1));
