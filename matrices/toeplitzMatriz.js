// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]] true

function isToeplitz(arr) {
  //row
  for (let i = 1; i < arr.length; i++) {
    //col
    for (let j = 1; j < arr[0].length; j++) {
      if (arr[i][j] !== arr[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
}
let arr2 = [
  [1, 2, 3, 4],
  [5, 1, 2, 5],
  [6, 5, 1, 2],
];
console.log(isToeplitz(arr2));
