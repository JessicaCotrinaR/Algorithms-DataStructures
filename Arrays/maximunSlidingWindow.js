function maximumSlidingWindow(nums, k) {
  // if nums.length doesn't have any value return []
  if (nums.length === 0) return [];
  //if k is 0 means that I do't value to sliding window
  if (k === 0) return nums;
  //create arr to add max values
  let answer = [];
  //traverse the nums. from i =0 until length -1 - k
  //set a infinite value to compare
  let max = -Infinity;
  for (let i = 0; i < nums.length - k; i++) {
    //for the have the 3 values and get max
    for (let j = i; j < i + k; j++) {
      let max = Math.max(max, nums[j]);
    }
    answer[i] = max;
  }
  return answer;
  //   let ans = [];
  //   let q = []; //[2]
  //   for (let i = 0; i < nums.length; i++) {
  //     //2
  //     while (q.length >= 0 && nums[i] > q[q.length - 1]) {
  //       //1>=0 && 2 > 1
  //       q.pop();
  //     }
  //     q.push(nums[i]); //[1]
  //     const j = i + 1 - k; // 0
  //     console.log(i, "j", j);
  //     if (j >= 0) {
  //       console.log("jjj", i, q[0]);
  //       ans.push(q[0]);
  //       if (nums[j] === q[0]) {
  //         q.shift();
  //       }
  //     }
  //   }
  //   return ans;
}
console.log(maximumSlidingWindow([1, 2, 4, 5, -1, 2, 3], 3));
