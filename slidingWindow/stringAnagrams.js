function stringAngrams(str, pattern) {
  let windowStart = 0,
    matched = 0;
  (frequency = {}), (answ = []);
  for (let i = 0; i < pattern.length; i++) {
    if (!frequency[pattern[i]]) {
      frequency[pattern[i]] = 1;
    } else {
      frequency[pattern[i]]++;
    }
  }
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in frequency) {
      frequency[rightChar]--;
      if (frequency[rightChar] === 0) {
        matched++;
      }
    }
    //have we found anagram?
    if (matched === Object.keys(frequency).length) {
      answ.push(windowStart);
    }
    //shrink the window
    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart++;
      if (leftChar in frequency) {
        if (frequency[leftChar] === 0) {
          matched--;
        }
        frequency[leftChar]++;
      }
    }
  }
  return answ;
}
/*
string="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/
let string = "ppqp",
  pattern = "pq";

console.log(stringAngrams(string, pattern));
//Time Complexity =  O(N + M)O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.
//Space Complexity = O(M)
