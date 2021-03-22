function max(arr, k) {
  let max_sum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  //   let resI = -1;
  //   let resJ = -1;

  for (let j = k; j < arr.length; j++) {
    sum += arr[j] - arr[j - k];
    if (max_sum < sum) {
      max_sum = sum;
      //   resI = j - k + 1;
      //   resJ = j;
    }
  }
  return sum;
}
console.log(max([2, 3, 2, 5, 1, 5], 3));
