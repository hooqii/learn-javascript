// Exercise: Day-19-Javascript. Sum Mix Array
// Source: https://www.codewars.com/kata/57eaeb9578748ff92a000009


function sumMixLong(x){
    let result = 0;
    for (let index = 0; index < x.length; index++) {
        result += parseInt(x[index]);
    }
    return result;
}

function sumMixMedium(x){
    let result = 0;
    for (const element of x) {
        result += parseInt(element);
    }
    return result;
}

const sumMixShort = x => x.map((a)=>+a).reduce((a,b)=>a+b);

console.log(sumMixLong([9, 3, '7', '3']));
console.log(sumMixMedium([9, 3, '7', '3']));
console.log(sumMixShort([9, 3, '7', '3']));