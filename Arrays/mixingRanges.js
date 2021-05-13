findMissingRanges = function (nums, lower, upper) {
  let answ = [];
  if (nums[0] != lower) nums.unshift(lower - 1);

  if (nums[nums.length - 1] != upper) nums.push(upper + 1);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1] || nums[i] == nums[i + 1]) continue;
    else if (nums[i] + 1 == nums[i + 1] - 1) {
      answ.push("" + (nums[i] + 1));
    } else {
      answ.push("" + (nums[i] + 1) + "->" + (nums[i + 1] - 1));
    }
  }
  return answ;
};
/*
Input: nums = [0,1,3,50,75], 
lower = 0, upper = 99
Output: 

["2","4->49","51->74","76->99"]
*/
