var maxDistToClosest = function (seats) {
  let empty = 0;
  let intervals = [];

  for (let seat of seats) {
    if (seat === 0) {
      empty++;
      continue;
    }
    intervals.push(empty);
    empty = 0;
  }

  intervals.push(empty);
  console.log(intervals);
  const left = intervals.shift();
  const right = intervals.pop();

  const maxMiddleInterval = Math.max(0, ...intervals);
  const middle = Math.floor((maxMiddleInterval + 1) / 2);

  return Math.max(left, middle, right);
  //[1,0,1]. There is at least one empty seat, and at least one person sitting
  //[1,0,0,1,0]
};
console.log(maxDistToClosest([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]));
