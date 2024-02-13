// Exeercise Day-13-Javascript: Total Amount Of Points
// Source : https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function pointsLong(games) {
  let points = 0;
  for (const element of games) {
    if (element[0] > element[2]) {
      points += 3
    } else if (element[0] == element[2]) {
      points += 1
    }
  }
  return points;
}

const pointsMedium = games => {
  let points = 0;
  for (const element of games) {
    element[0] > element[2] ? points += 3 : element[0] == element[2] ? points += 1 : points += 0;
  }
  return points;
}

const pointsShort = games => games.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y),0)

console.log(pointsLong(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(pointsMedium(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(pointsShort(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));