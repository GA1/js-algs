const {getLines} = require("../fileUtils");
const {algorithm} = require("./1-algorithm");

const lines = getLines('./input.txt').filter(line => line !== '')


let result = 0

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  result += algorithm(Number(line))
}

console.log(result)
