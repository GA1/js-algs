const {getLines} = require("../../fileUtils");
const {algorithm1} = require("./1-algorithm");

const lines = getLines('./1-input.txt').filter(line => line !== '')

const result = algorithm1(lines[0], lines[1])

console.log(result)
