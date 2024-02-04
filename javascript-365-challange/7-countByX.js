// Exercose: Day-7-Javascript. Count By X
// Source: https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countByXLong(x, n) {
  let result = [];
  for (let index = 1; index <= n; index++) {
    result.push(x * index);
  }
  return result;
}

function countByXMedium(x, n) {
  return [...Array(n)].map((e, i) => (i + 1) * x);
} //Use Spread Operator And Map For Creating New Array

const countByXShort = (x, n) => [...Array(n)].map((e, i) => (i + 1) * x);

console.log(countByXLong(2, 10));
console.log(countByXMedium(2, 10));
console.log(countByXShort(2, 10));
