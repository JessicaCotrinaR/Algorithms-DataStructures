/*
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
*/

const find_permutation = function (str, pattern) {
  // Input: a string of letters, and a pattern (string of letters)
  // Output: boolean of whether or not the str contains a permutation of the pattern
  let windowStart = 0,
    charFrecuency = {},
    matched = 0;
  //iterating through the pattern
  for (let i = 0; i < pattern.length; i++) {
    if (!charFrecuency[pattern[i]]) {
      charFrecuency[pattern[i]] = 1;
    } else {
      charFrecuency[pattern[i]]++;
    }
  }
  //march all the characters from the 'charfrecuency' with the current window
  //try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFrecuency) {
      charFrecuency[rightChar]--;
      if (charFrecuency[rightChar] === 0) {
        matched++;
      }
    }
    //if matches is equal to the length of charFrequency we found the permutation
    if (matched === Object.keys(charFrecuency).length) return true;
    //shrink the slinding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      if (leftChar in charFrecuency) {
        if (charFrecuency[leftChar] === 0) {
          matched--;
        }
        charFrecuency[leftChar]++;
      }
    }
  }
  return false;
};

let string = "bcdxabcdy",
  pattern = "bcdyabcdz";
console.log(find_permutation(string, pattern));
