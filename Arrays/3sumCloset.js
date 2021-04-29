/*

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

*/
function sumCloset(nums, target) {
  //sort the array in ascending order
  nums.sort((a, b) => a - b);
  let bigNum = Infinity; // Initializing with a Very Big Number
  let answ = 0; // to hold the result
  for (let i = 0; i < nums.length - 2; i++) {
    //-2 to elements to be covered by left and right
    if (nums[i] === nums[i - 1]) continue; // prevent duplicate
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      //already met the sum
      if (sum === target) return sum;
      // if  diff is less than bigNum,
      // then save this bigNum
      let diff = Math.abs(target - sum);
      if (diff < bigNum) {
        bigNum = diff;
        answ = sum;
      }
      // if sum is Greater than target
      // then reduce from right
      if (sum > target) right--;
      // else increase the lower bound
      else left++;
    }
  }
  return answ;
}
let nums = [-1, 2, 1, -4],
  target = 1;
console.log(sumCloset(nums, target));
