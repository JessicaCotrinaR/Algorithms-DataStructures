function threeSum(nums) {
  let result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  let target = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;
    //we dont'want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // j represents the middle elemente between i and k
    let j = i + 1;
    //represents the right most element
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);
        // this is important! we need to continue to increment `j` and decrement `k`
        // as long as those values are duplicated. in other words, we wanna skip values
        // we've already seen.
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        //finally we need to move j forward and k backward to the next unique elemnts
        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
