//'tree' = eert
function sortCharsbyFrequency(str) {
  let answer = "";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let sortWord = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  for (let char of sortWord) {
    //values
    answer += char.repeat(obj[char]);
  }
  return answer;
}
console.log(sortCharsbyFrequency("tree"));
