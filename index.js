const arr = [1, 2, 3];
let first = 1;
let second = 2;
[first, second] = [second, first];
console.log(`second = ${second}`) //should be printed out 1
console.log(`first = ${first}`) //should be printed out 2