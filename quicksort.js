function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      console.log(arr, swapIdx, i);
      swap(arr, swapIdx, i); // need thisZ???
    }
  }
  console.log(arr, start, swapIdx);
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //left
    quicksort(arr, left, pivotIdx - 1);
    //right
    quicksort(arr, pivotIdx + 1, right);
  }
  return arr;
}
let arr = [4, 8, 2, 1];
console.log(quicksort(arr, (left = 0), (right = arr.length - 1)));
