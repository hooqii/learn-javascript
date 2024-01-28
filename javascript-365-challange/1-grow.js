// Exercise: Day-1-JavaScript. Beginner - Reduce but Grow
// Source: https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function growLong(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

function growMedium(x) {
  const result = x.reduce((acc, curr) => acc * curr);
  return result;
}

const growShort = (x) => x.reduce((acc, curr) => acc * curr);

console.log(growLong([2, 4, 3, 4, 5]));
console.log(growMedium([2, 4, 3, 4, 5]));
console.log(growShort([2, 4, 3, 4, 5]));
