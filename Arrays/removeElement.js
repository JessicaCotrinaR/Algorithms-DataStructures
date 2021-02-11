/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
*/
var removeElement = function (nums, val) {
  if (!nums.length) return 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
