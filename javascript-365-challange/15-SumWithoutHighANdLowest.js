// Exercise: Day-15-JavaScript. Sum Without High And Lowest
// Source: https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArrayLong(arr) {
    if (arr === null || arr.length == 2 || arr.length == 1 || arr.length == 0) return 0;
    let sortArr = arr.sort((a, b) => a - b);
    let result = 0;
    for (let index = 1; index < arr.length - 1; index++) {
        result += sortArr[index]
    }
    return result;
}

const sumArrayShort = arr => arr ? arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr, 0) : 0;

console.log(sumArrayLong([-6, 20, -1, 10, -12]));
console.log(sumArrayShort([-6, 20, -1, 10, -12]));