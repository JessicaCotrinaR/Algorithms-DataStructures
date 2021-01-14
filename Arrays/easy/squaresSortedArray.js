//Input:
nums = [-4, -1, 0, 3, 10];
//[16,1,0,9,100]
//Output: [0,1,9,16,100]

function sortedSquares(nums) {
  let result = [];
  let start = 0;
  let end = nums.length - 1;
  let temp = end;

  while (start <= end) {
    if (nums[start] ** 2 > nums[end] ** 2) {
      result[temp--] = nums[start++] ** 2;
    } else {
      result[temp--] = nums[end--] ** 2;
    }
  }

  return result;
}

console.log(sortedSquares(nums));
