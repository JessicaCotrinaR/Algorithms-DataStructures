function sortKMessedArray(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minP = i;
    for (let j = i + 1; j <= i + k; j++) {
      if (arr[j] < min) {
        minP = j;
        min = arr[j];
      }
    }
    //swap(arr[minP], arr[i]);
    temp = arr[minP];
    arr[minP] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
let a, b;
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}
let arr = [1, 0],
  k = 2;
console.log(sortKMessedArray(arr, k));
