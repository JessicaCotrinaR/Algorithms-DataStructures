function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
//Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]

console.log(removeElement([3, 2, 2, 3], 3));
