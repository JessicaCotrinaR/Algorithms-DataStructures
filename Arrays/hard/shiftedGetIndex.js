//[1,2,3,4,5]
//[3,4,5,1,2] 1
//return 3

function shiftedArrSearch(shiftArr, num) {
  //since the shiftArr is not sorted i should do something else and then apply binary search

  pivot = findPivotPoint(shiftArr);
  if (pivot === 0 || num < shiftArr[0]) {
    return binarySearch(shiftArr, pivot, shiftArr.length - 1, num);
  }
  return binarySearch(shiftArr, 0, pivot - 1, num);

  function findPivotPoint(arr) {
    let begin = 0;
    let end = arr.length - 1;
    while (begin <= end) {
      let mid = begin + Math.floor((begin + end) / 2);
      if (mid === 0 || arr[mid] < arr[mid - 1]) {
        return mid;
      }
      if (arr[mid] > arr[0]) {
        begin = mid + 1;
      } else {
        end = mid - 1;
      }
      return 0;
    }
  }

  function binarySearch(arr, begin, end, num) {
    while (begin <= end) {
      mid = begin + Math.floor((end - begin) / 2);
      if (arr[mid] < num) {
        begin = mid + 1;
      } else if (arr[mid] == num) {
        return mid;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
}
console.log(shiftedArrSearch([8, 9, 10, 6, 7], 7));
