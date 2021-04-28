function romanToInteger(s) {
  const map = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };

  // Add first value to the result as constraints are 1 < = s
  let res = map[s[0]];
  console.log(res);
  for (let i = 1; i < s.length; i++) {
    // Add current value
    res += map[s[i]];

    // if previous value is less than the current value subtract twice of prev since we have added it earlier
    if (map[s[i]] > map[s[i - 1]]) {
      res -= 2 * map[s[i - 1]];
    }
  }
  return res;
}
console.log(romanToInteger("II"));
