//5
const readline = require("readline-sync");

let cost = Number(readline.question("Enter Price"));
let tax = cost * 0.08;
let newcost = cost+ tax;
newcost = newcost.toFixed(2);
console.log(newcost);