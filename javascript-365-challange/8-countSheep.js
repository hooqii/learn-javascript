// Exercise: Day-8-JavaScript. Count Sheep
// Source: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

function countSheepLong(sheep) {
  let result = "";
  for (let index = 0; index <= sheep; index++) {
    if (index > 0) {
      result += `${index} sheep...`;
    }
  }
  return result;
}

function countSheepMedium(sheep) {
  return [...Array(sheep).keys()].map(x=>`${x+1} sheep...`).join``
}

const countSheepShort = n => [...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

console.log(countSheepLong(2));
console.log(countSheepMedium(2));
console.log(countSheepShort(2));