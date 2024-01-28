// Exercise: Day-2-JavaScript. Reversed sequence
// source: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript 

const reverseLong = (n) => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
}

const reverseMedium = (n) => {
    return [...Array(n)].map((arr, i) => i+1).reverse();
}

const reverseShort = (n) => [...Array(n)].map((arr, i) => i+1).reverse();

console.log(reverseLong(5));
console.log(reverseMedium(5));
console.log(reverseShort(5));