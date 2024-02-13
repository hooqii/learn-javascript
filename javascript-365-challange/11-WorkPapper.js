// Exercise: Day-11-Javascript. Convert String To Array
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

function rpsLong(p1, p2) {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "scissors") {
    return "Player 2 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "paper") {
    return "Player 2 won!";
  } else if (p1 === p2) {
    return "Draw!";
  }
}

const rpsMedium = (p1, p2) => {
  const rules = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  if (p1 === p2) {
    return "Draw!";
  }
  rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!"; //Ternary
};

const rpsShort = (p1, p2) => p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? 1 : 2} won!`; //Nested Ternary

console.log(rpsLong("paper", "paper"));
console.log(rpsMedium("paper", "paper"));
console.log(rpsShort("paper", "paper"));
