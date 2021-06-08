function LongestSubstringwithSameLettersAfterReplacement(str, k) {
  let windowStart = 0,
    maxlength = 0,
    maxRepeteadLetterCount = {},
    frequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequency)) {
      frequency[rightChar] = 0;
    }
    frequency[rightChar] += 1;
    maxRepeteadLetterCount = Math.max(
      maxRepeteadLetterCount,
      frequency[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeteadLetterCount > k) {
      let leftChar = str[windowStart];
      frequency[leftChar] -= 1;
      windowStart += 1;
    }
    maxlength = Math.max(maxlength, windowEnd - windowStart + 1);
  }
  return maxlength;
}

/*
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

*/
console.log(LongestSubstringwithSameLettersAfterReplacement("abccde", 1));
