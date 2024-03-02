// Exercise: Day-16-Javascript. Get The Mean Of Array
// Source: https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverageLong(number) {
    let total = 0;
    for (const element of number) {
        total += element;
    }
    return Math.floor(total / number.length);
}

function getAverageMedium(number) {
    let totalArr = number.reduce((total, current) => total += current);
    return Math.floor(totalArr / number.length);
}

const getAverageShort = number => Math.floor(number.reduce((a,b)=>a+=b)/number.length);

console.log(getAverageLong([1, 2, 3, 4, 5]))
console.log(getAverageMedium([1, 2, 3, 4, 5]))
console.log(getAverageShort([1, 2, 3, 4, 5]))