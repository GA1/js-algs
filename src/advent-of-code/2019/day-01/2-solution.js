const {getLines} = require("../../fileUtils");
const {algorithm} = require("./2-algorithm");

const lines = getLines('./2-input.txt').filter(line => line !== '')

let result = 0

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  result += algorithm(Number(line))
}

console.log(result)
