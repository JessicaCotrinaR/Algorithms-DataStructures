/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
*/
function canJump(nums) {
  if (nums && nums.length <= 1) {
    return true;
  }
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (i > curMax) {
      console.log("entro");
      return false;
    }

    if (curMax >= nums.length - 1) {
      return true;
    }

    curMax = Math.max(nums[i] + i, curMax);
    console.log(curMax);
  }
}
let nums = [2, 1, 1, 3, 1, 1, 1];
console.log(canJump(nums));
