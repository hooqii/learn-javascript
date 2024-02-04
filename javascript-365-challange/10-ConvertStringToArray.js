// Exercise: Day-10-Javascript. Convert String To Array
// Source: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

function stringToArrayLong(str) {
  let arr = [];
  let word = "";
  for (const element of str) {
    if (element !== " ") {
      word += element;
    } else if (word.length > 0) {
      arr.push(word);
      word = "";
    }
  }
  if (word.length > 0) {
    arr.push(word);
  }
  return arr;
}

function stringToArrayMedium(str) {
  let arr = str.split(" ");
  return arr;
}

const stringToArrayShort = str => str.split(" ");

console.log(stringToArrayLong("Alex Brodi Ganu Iza"));
console.log(stringToArrayMedium("Alex Brodi Ganu Iza"));
console.log(stringToArrayShort("Alex Brodi Ganu Iza"));
