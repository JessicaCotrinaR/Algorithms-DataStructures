function maximunSubArray(arr) {
  let maxSum = arr[0];
  let currSum = maxSum;

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i] + currSum, arr[i]);
    console.log(currSum, "currSum", arr[i] + currSum, arr[i]);
    maxSum = Math.max(currSum, maxSum);
    console.log(maxSum, "maxSum", currSum, "nn", maxSum);
  }
  return maxSum;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximunSubArray(arr));
