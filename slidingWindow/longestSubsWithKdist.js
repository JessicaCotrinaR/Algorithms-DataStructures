function longestSubstrwithKdist(str, k) {
  let windowStart = 0;
  let longest = 0;
  let charFrecuency = {};
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!charFrecuency[rightChar]) {
      charFrecuency[rightChar] = 0;
    }
    charFrecuency[rightChar] += 1;
    while (Object.keys(charFrecuency).length > k) {
      let leftChar = str[windowStart];
      charFrecuency[leftChar] -= 1;
      if (charFrecuency[leftChar] === 0) {
        delete charFrecuency[leftChar];
      }
      windowStart += 1;
    }
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

console.log(longestSubstrwithKdist("araaci", 2));
