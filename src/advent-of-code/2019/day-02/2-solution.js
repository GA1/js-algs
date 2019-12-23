const {getLines} = require("../../fileUtils");
const {algorithm} = require("./2-algorithm");

const line = getLines('./2-input.txt').filter(line => line !== '')[0]

for (let noun = 0; noun < 100; noun++) {
  for (let verb = 0; verb < 100; verb++) {
    const output = algorithm(line, noun, verb);
    if (output === 19690720) {
      console.log(`noun = ${noun}, verb = ${verb}, output = ${output}, result = ${100 * noun + verb}`)
    }
  }
}
