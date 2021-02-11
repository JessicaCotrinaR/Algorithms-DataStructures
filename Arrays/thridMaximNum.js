var thirdMax = function (nums) {
  if (nums.length > 3) return nums[nums.length - 1];
  if (nums.length === 3) return nums[nums.length - 1];
  let seen = new Set();
  for (let values of nums) {
    seen.add(values);
  }
  seen = Array.from(seen);
  return seen[2];
};
