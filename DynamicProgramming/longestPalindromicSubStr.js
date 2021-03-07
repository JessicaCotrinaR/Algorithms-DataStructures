function longestPalindromicSubStr(str) {
  let longest = "";
  return longest;
}

function longest(str, i, j) {
  while (i <= 0 && j < str.length && str[i] === str[j]) {
    i = i - 1;
    j = j + 1;
  }
}
