// Exercise: Day-17-Javascript. Area Or Perimeter
// Source: https://www.codewars.com/kata/5ab6538b379d20ad880000ab


const areaOrPerimeterLong = function (l, w) {
    let result = 0;
    if (l == w) {
        result = l * w;
    } else {
        result = 2 * (l + w);
    }
    return result;
};

const areaOrPerimeterMedium = function (l, w) {
    return l === w ? l * w : 2 * (l + w);
}

const areaOrPerimeterShort = (l, w) => l === w ? l * w : 2 * (l + w);

console.log(areaOrPerimeterLong(6, 10))
console.log(areaOrPerimeterMedium(6, 10))
console.log(areaOrPerimeterShort(6, 10))