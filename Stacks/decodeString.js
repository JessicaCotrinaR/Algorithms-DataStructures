function decodeString(s) {
  let multiply = [];
  let repeatStr = [];
  let answer = "";
  let tempMultiplier = "";
  //iterate through s
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!isNaN(char)) {
      console.log(char);
      //check is a number
      tempMultiplier = `${tempMultiplier}${char}`; //31,2 if i have ore than one number. concatenate
    } else if (char === "[") {
      multiply.push(tempMultiplier); //[""]
      tempMultiplier = "";

      repeatStr.push(answer);
      answer = "";
    } else if (char === "]") {
      //close bracket start repeating
      answer = repeatStr.pop() + answer.repeat(multiply.pop()); //a
    } else {
      // it is not a number it not a bracket
      answer += char; //""+a
    }
  }
  return answer;
}

console.log(decodeString("3[a2[c]]"));

/*
3[a]2[bc]

*/
