var removeDuplicates = function (s, k) {
  let obj = {};
  let answ = [];
  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (let char in obj) {
    if (obj[char] === k) continue;
    else {
      answ.push(char.repeat(obj[char]));
    }
  }
  return answ.join("");
};

console.log(removeDuplicates("pbbcggttciiippooaais", 2));
let a = "ad";
let b = Number(a);
console.log(b);
