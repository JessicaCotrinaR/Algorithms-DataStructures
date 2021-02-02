//[1,3,2] => true

function validMountainArray(arr) {
  let len = arr.length;
  let i = 0;
  let j = len - 1;
  for (i = 0; i < j; i++) {
    if (arr[i] >= arr[i + 1]) {
      console.log("no??", arr[i]);
      break;
    }
  }
  console.log(i);
  console.log(j);
  if (i == 0 || i == j) return false;
  for (j = len - 1; j > 0; j--) {
    if (arr[j - 1] <= arr[j]) {
      break;
    }
  }
  if (j == 0 || j == len - 1) return false;
  return i == j ? true : false;
}
console.log(validMountainArray([1, 3, 2]));
