const {question} = require("readline-sync");

let number = question(" Enter a number: ");
let two = question( "Divide");
let answer = number % 2==0;
console.log(`${number} being divided by ${2} ${answer}!`);
