function minSteps(s, t) {
  let answ = 0;
  let m1 = new Map();
  let m2 = new Map();
  for (let i = 0; i < s.length; i++) {
    m1.set(s[i], m1.get(s[i]) + 1 || 1);
    m2.set(t[i], m2.get(t[i]) + 1 || 1);
  }

  let keys = Array.from(m1.keys());
  console.log(m1);
  for (let letter of keys) {
    if (m2.has(letter)) {
      console.log("djshf", m1.get(letter));
      console.log("dmfh", m2.get(letter));
      if (m1.get(letter) > m2.get(letter))
        answ += m1.get(letter) - m2.get(letter);
    } else answ += m1.get(letter);
  }
  return answ;
}
let s = "leetcode";
let t = "practice";

console.log(minSteps(s, t));
