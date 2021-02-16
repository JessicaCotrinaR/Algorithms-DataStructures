function thirdMax(nums) {
  nums.sort((a, b) => b - a);
  let arr = new Set();
  for (let val of nums) {
    arr.add(val);
  }
  arr = Array.from(arr);
  // for (let i=0; i<nums.length; i++) {
  //     if (nums[i]!==nums[i+1]) {
  //         arr.push(nums[i]);
  //     }
  // }
  console.log(arr);
  if (arr.length < 3) {
    return Math.max(...arr);
  } else {
    return arr[2];
  }
}
console.log(thirdMax([3, 2, 1]));
