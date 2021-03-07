// s = leetcode , d = [leet, code] true

function breakWord(s, d) {
  if (s.length === 0 || d.length === 0) return false;
  // create a set to keep unique values from dictionary
  let set = new Set(d);
  // calculate every substring of the string
  let status = Array(s.length + 1).fill(false);
  status[0] = true; // because the empty string is included in the dictionary
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < s.length; start++) {
      if (start > end) break;
      let word = s.slice(start, end);
      if (status[start] === true && set.has(word)) {
        console.log(word);
        status[end] = true;
        break;
      }
      console.log("word===>", s.slice(start, end), start, end);
    }
  }
  console.log(status);
  return status[s.length];
}
s = "catsandog";
//tffffff;
d = ["cats", "dog", "sand", "and", "cat"];
console.log(breakWord(s, d));
