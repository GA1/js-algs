const {getLines} = require("../../fileUtils");
const {algorithm} = require("./1-algorithm");

const lines = getLines('./1-input.txt').filter(line => line !== '')

const result = algorithm(lines[0])

console.log(result)
