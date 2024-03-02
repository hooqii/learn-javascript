// Exercise: Day-20-Javascript. The Feast of Many Beasts
// Source: https://www.codewars.com/kata/5aa736a455f906981800360d

function feastLong(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true;
    } else {
        return false;
    }
}

function feastMedium(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]) ? true : false;
}

const feastShort = (beast, dish) => beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);

console.log(feastLong("great blue heron", "garlic naan"))
console.log(feastMedium("great blue heron", "garlic naan"))
console.log(feastShort("great blue heron", "garlic naan"))