function pairsDiference(arr, k) {
  let map = {};
  let answer = [];
  if (k < 0) return [];
  for (let x in arr) {
    map[x - k] = x;
  }
  for (let y in arr) {
    if (map[y]) {
      answer.push([map[y], y]);
    }
  }
  return answer;
}

console.log(pairsDiference([4, 1], 3));
