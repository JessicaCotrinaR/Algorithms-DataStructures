function threeSum(nums) {
  let answer = [];
  nums.sort((a, b) => a - b);
  let target = 0;
  for (let i = 0; i < nums.length; i++) {
    //bs
    if (nums[i] > target) break;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          answer.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
        }
      }
    }
  }
  return answer;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
