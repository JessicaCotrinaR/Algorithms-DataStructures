function mergeIntervals(intervals) {
  if (intervals.length < 2) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = res[res.length - 1];
    console.log("cambio", prev);
    console.log("pr", prev);
    const curr = intervals[i];
    if (curr[0] <= prev[1]) {
      res.pop();
      res.push([prev[0], Math.max(curr[1], prev[1])]);
    } else {
      res.push(curr);
    }
  }
  return res;
}

let intervals = [
  [1, 3],
  [7, 9],
  [9, 10],
  [15, 18],
];

//console.log(sort);
console.log(mergeIntervals(intervals));
