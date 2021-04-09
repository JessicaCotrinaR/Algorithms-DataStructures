var decodeString = function (s) {
  const letters = [];
  const numbers = [];
  let result = "";
  let nums = "";

  for (const char of s) {
    if (!isNaN(char)) {
      nums = `${nums}${char}`;
    } else if (char === "[") {
      numbers.push(nums);
      nums = "";
      letters.push(result);
      result = "";
    } else if (char === "]") {
      result = letters.pop() + result.repeat(numbers.pop());
    } else {
      result += char;
    }
  }
  return result;
};
console.log("HELLO");
console.log(decodeString("100[a]"));
