var minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let nRooms = 0;
  let q = [];
  for (let i = 0; i < intervals.length; i++) {
    let next = intervals[i];
    console.log(next);
    while (q.length && q[0] <= next[0]) {
      q.shift();
    }
    q.push(next[1]);
    q.sort((a, b) => a - b);
    nRooms = Math.max(nRooms, q.length);
  }
  return nRooms;
};
console.log(
  minMeetingRooms([
    [0, 30],
    [20, 30],
    [15, 20],
  ])
);
/*
0----------------30
    15---20
        20-------30
n = [20,30]
q = []
q = [30] 30 <= 15
q = [30,30] n = 2
30 <= 20
[30,30,20]


 */
