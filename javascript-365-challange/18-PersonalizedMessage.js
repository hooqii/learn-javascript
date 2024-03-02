// Exercise: Day-18-Javascript. Personlized Message
// Source: https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet(name, owner) {
    let message = "";
    if (name === owner) {
        message = "Hello boss";
    } else {
        message = "Hello guest";
    }
    return message;
}

const greetMedium = (name, owner) => {
    let message = "";
    name === owner ? message = "Hello boss" : message = "Hello guest";
    return message;
}

const greetShort = (name, owner) => name == owner ? "Hello boss" : "Hello guest";

console.log(greet("Alex", "Budi"))
console.log(greetMedium("Alex", "Budi"))
console.log(greetShort("Alex", "Budi"))