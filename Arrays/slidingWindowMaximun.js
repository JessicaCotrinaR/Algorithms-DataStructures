function slidingWindowMaximum(nums, k) {
  let answer = [];
  let q = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] >= q[q.length - 1]) q.shift();
    q.push(nums[i]);
    //the window is fully overlapping
    let j = i + 1 - k;
    if (j >= 0) {
      answer.push(q[0]);
      if (nums[j] === q[0]) q.shift();
    }
  }
  return answer;
}
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(slidingWindowMaximum(nums, k));

/*
1,3,-1,-3,5,3,6,7, k = 3
*/
