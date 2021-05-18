function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 1 < 3
    helper(s, i, i); //found all single number length Palindromic
    helper(s, i, i + 1); //found all even number length Palindromic
  }
  return count;
  function helper(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      //verify if is a palindrom
      count += 1;
      low -= 1;
      high += 1;
    }
  }
}
/*

s = aaa
ouput = 6
becase we can have: a,a,a,aa,aa,aaa
counter = 1
*/
console.log(countSubstrings("aaa"));
