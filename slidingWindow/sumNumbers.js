//[1,3,4,5,6], s = 4
function smallestSubArraywithGivenSum(arr, s) {
  let j = 0,
    sum = 0,
    smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= s) {
      sum -= arr[j];
      smallest = Math.min(smallest, i - j + 1);
      j += 1;
    }
  }
  if (smallest === Infinity) return 0;
  return smallest;
}
console.log(smallestSubArraywithGivenSum([3, 4, 1, 1, 6], (s = 8)));
