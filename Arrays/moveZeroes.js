/* move zeroes inplace
input = [0,1,0,3,12]
ouput = [1,3,12,0,0]
*/
function moveZeroes(nums) {
  let pos = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (pos !== i) {
        temp = nums[pos];
        nums[pos] = nums[i];
        nums[i] = temp;
      }
      ++pos;
    }
  }
  return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 12]));
