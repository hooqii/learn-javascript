// Exercice: Day-4-JavaScript. Sentence Smash
// Source: https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smashLong(words) {
  let result = '';
  for (let index = 0; index < words.length; index++) {
    if (index < words.length - 1) {
      result += words[index]+" ";
    } else {
      result += words[index];
    }
  }
  return result;
}

function smashMedium(words) {
  return words.join(" ");
}

const smashShort = (words) => words.join(" ");

console.log(smashLong(["hello", "world", "Alex"]));
console.log(smashMedium(["hello", "world", "Alex"]));
console.log(smashShort(["hello", "world", "Alex"]));
