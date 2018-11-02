const Stack = require("./stack").Stack;

function areCorrect(input) {
  const openingCharacterMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const closingCharacterMap = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const stack = new Stack();

  input.split('').forEach(char => {
    const isOpeningChar = openingCharacterMap[char];
    const isClosingChar = closingCharacterMap[char];

    if (isOpeningChar) {
      stack.push(char);
    }

    if (isClosingChar) {
      if (stack.isEmpty())
        return 0
      else if (stack.peek() === closingCharacterMap[char]) {
        stack.pop();
      }
    }
  });

  return stack.N === 0 ? 1 : 0;
}

exports.areCorrect = areCorrect