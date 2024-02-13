// Exeercise Day-12-Javascript: Array Plus Array
// Source: https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArrayLong(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  for (const element of arr1) {
    sumArr1 += element;
  }
  for (const element of arr2) {
    sumArr2 += element;
  }
  return sumArr1 + sumArr2;
}

function arrayPlusArrayMedium(arr1, arr2) {
  const getSum = (a, b) => a + b;
  return arr1.reduce(getSum) + arr2.reduce(getSum);
}

const arrayPlusArrayShort = (arr1, arr2) => arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);

console.log(arrayPlusArrayLong([100, 200, 300], [400, 500, 600]));
console.log(arrayPlusArrayMedium([100, 200, 300], [400, 500, 600]));
console.log(arrayPlusArrayShort([100, 200, 300], [400, 500, 600]));
