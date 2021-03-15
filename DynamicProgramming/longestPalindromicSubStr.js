function longestPalindromicSubStr(str) {
  if (str.length === 0) return "";
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    const current1 = findLongest(str, i, i);
    console.log("curr1", current1);
    const current2 = findLongest(str, i, i + 1);
    console.log("curr2", current2);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
}

function findLongest(str, i, j) {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i = i - 1;
    j = j + 1;
  }
  return str.slice(i + 1, j);
}

console.log(longestPalindromicSubStr("nabanna"));
