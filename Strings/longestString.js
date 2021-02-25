/*
input: abcabccbb
ouput: 3
*/
function longestSubstring(s) {
  if (!s.length || s === "") return 0;
  let i = 0,
    j = 0,
    max = 0;
  let set = new Set();
  while (i < s.length) {
    char = s.charAt(i);
    if (!set.has(char)) {
      set.add(char);
      max = Math.max(max, set.size);
      i++;
      console.log(i);
    } else {
      set.delete(s.charAt(j));
      j++;
    }
  }
  return max;
}
console.log(longestSubstring("anaa"));
