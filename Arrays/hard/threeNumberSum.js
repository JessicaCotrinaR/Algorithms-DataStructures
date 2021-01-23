function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let totalSum = array[i] + array[left] + array[right];
      if (totalSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (totalSum < targetSum) {
        left++;
      } else if (totalSum > targetSum) {
        right--;
      }
    }
  }
  return result;
}
