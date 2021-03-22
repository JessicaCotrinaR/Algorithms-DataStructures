//o(n) time, o(1) space
function twoSumArr(arr, target) {
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    let match = target - arr[i];
    if (nums[match] !== undefined) {
      return [i, arr[i]];
    }
    nums[arr[i]] = i;
  }
  return [];
}

//o log(n) time, o(1)
// function twoSumArr(arr, target) {
//   arr.sort();
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let currentSum = arr[start] + arr[end];
//     if (currentSum === target) {
//       return [arr[end], arr[start]];
//     } else if (currentSum < target) {
//       start += 1;
//     } else if (currentSum > target) {
//       end -= 1;
//     } else {
//       return [];
//     }
//   }
// }
console.log(twoSumArr([0, 2, 3, 4], 5));
