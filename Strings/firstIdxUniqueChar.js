function firstIdxUniqueChar(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstIdxUniqueChar("leetcode"));
