function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) {
      obj[t[i]]--;
    }
  }
  let values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("anagram", "ana"));
