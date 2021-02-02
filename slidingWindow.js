function maxSubArrSum(nums, size) {
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    console.log("on", currSum);
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum -= nums[i - (size - 1)];
      console.log(currSum);
    }
  }
  return maxSumSeen;
}

const arr = [1, 2, 3, 5, 4, 8, 6, 2];
console.log(maxSubArrSum(arr, 3));
