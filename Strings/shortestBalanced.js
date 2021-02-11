function shortestBalanced(str) {
  let newString = "";
  let answer = str;
  let isValid = false;
  if (str.length === 0) return -1;
  let seen = new Set();
  //unique values
  for (const val of str) {
    seen.add(val);
  }
  //coverting set {} to Array
  seen = Array.from(seen);
  //go through each element
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toLowerCase() && seen.includes(char.toUpperCase())) {
      newString += char;
    } else if (
      char === char.toUpperCase() &&
      seen.includes(char.toLowerCase())
    ) {
      newString += char;
    } else {
      //because verify new string sea menor q el q tengo
      if (newString.length > 1 && answer.length > newString.length) {
        answer = newString;
        isValid = true;
      }
      newString = "";
    }
  }
  if (newString.length > 1 && answer.length >= newString.length) {
    answer = newString;
    isValid = true;
  }
  return answer == str && !isValid ? -1 : answer.length;
}
console.log(shortestBalanced("azABaAbza"));
console.log(shortestBalanced("TacoCat"));
console.log(shortestBalanced("AcZCbaBz"));
console.log(shortestBalanced("abcdefghijklmnopqrstuvxyz"));
