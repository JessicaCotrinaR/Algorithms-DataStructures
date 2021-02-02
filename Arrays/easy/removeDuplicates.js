function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
