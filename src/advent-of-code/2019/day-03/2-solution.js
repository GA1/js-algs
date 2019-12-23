const {getLines} = require("../../fileUtils");
const {algorithm2} = require("./2-algorithm");

const lines = getLines('./2-input.txt').filter(line => line !== '')

const result = algorithm2(lines[0], lines[1])

console.log(result)
