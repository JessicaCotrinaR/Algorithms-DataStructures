function squaresSorted(arr) {
  let answer = [];
  let left = 0;
  let right = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Math.abs(arr[left]) > arr[right]) {
      answer[i] = arr[left] * arr[left];
      left++;
    } else {
      answer[i] = arr[right] * arr[right];
      right--;
    }
  }
  return answer;
}
console.log(squaresSorted([-4, -1, 0, 3, 10]));
