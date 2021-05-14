function validParentheses(str) {
  let abc = "abcdefghijklmnopqrstuwxyz";
  if (str.length === 0) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (str[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (abc.includes(str[i])) {
      continue;
    } else {
      return false;
    }
  }
  console.log(stack);
  return stack.length === 0 ? true : false;
}

console.log(validParentheses("["));
