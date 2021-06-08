function noReapeatSubstr(str) {
  let windowStart = 0;
  let maxlength = 0,
    charIndexMap = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    console.log(charIndexMap);
    charIndexMap[rightChar] = windowEnd;
    // console.log("Map", charIndexMap, windowEnd);
    maxlength = Math.max(maxlength, windowEnd - windowStart + 1);
  }
  return maxlength;
}
/*
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/
let str = "aabccbb";
console.log(noReapeatSubstr(str));
