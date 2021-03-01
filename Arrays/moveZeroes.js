/* move zeroes inplace
input = [0,1,0,3,12]
ouput = [1,3,12,0,0]
*/
function moveZeroes(nums) {
  let i = 0,
    j = 0,
    temp;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      if (j !== i) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
      ++j;
    }
    ++i;
  }
  return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
