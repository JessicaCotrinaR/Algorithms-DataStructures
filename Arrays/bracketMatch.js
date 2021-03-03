function bracketMatch(text) {
  let counter = 0;
  let numbers = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") {
      counter++;
    }
    if (text[i] === ")") {
      counter--;
    }
    if (counter < 0) {
      numbers++;
      counter = 0;
    }
  }
  return numbers + counter;
}
console.log(bracketMatch("())("));
let arr = [1, 2, 3];
console.log("ewnhe", arr.pop());
