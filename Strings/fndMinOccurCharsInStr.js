/*
test
t:2
e:1
s:1
*/

function minOcurringCharinStr(s) {
  //map
  let map = {};
  for (let char in s) {
    if (!map[s[char]]) {
      map[s[char]] = 1;
    } else {
      map[s[char]]++;
    }
  }
  console.log(map);
  const sort = Object.keys(map).sort((a, b) => {
    let n = map[a] - map[b];
    if (n !== 0) return n;
    else return a > b ? 1 : -1;
  });
  return sort;
}
let s = "test";
console.log(minOcurringCharinStr(s));
