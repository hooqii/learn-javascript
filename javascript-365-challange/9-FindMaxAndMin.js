// Exercise: Day-8-Javascript. Find Max And Min
// Soource: https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const maxLong = (list) => {
  let result = list[0];
  for (const elements of list) {
    if (result < elements) {
      result = elements;
    }
  }
  return result;
};

const minLong = (list) => {
  let result = list[0];
  for (const elements of list) {
    if (result > elements) {
      result = elements;
    }
  }
  return result;
};

const maxShort = list => Math.max(...list);
const minShort = list => Math.min(...list);


console.log(maxLong([-52, 56, 30, 29, -54, 0, -110]));
console.log(minLong([-52, 56, 30, 29, -54, 0, -110]));
console.log(maxShort([-52, 56, 30, 29, -54, 0, -110]));
console.log(minShort([-52, 56, 30, 29, -54, 0, -110]));
