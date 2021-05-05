function rotateImage(matrix) {
  let n = matrix.length;
  //start traversing
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //swap
      let tmp = matrix[i][j]; // have a temp where we are going to have a value to swap
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
      if (i == j) {
        //if i and j are equal means that we are done swapping
        break;
      }
    }
  }

  for (let k = 0; k < n; k++) {
    matrix[k].reverse();
  }
  return matrix;
}
let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
/*
    .
[[1,2,3],
   .
  [4,5,6],
  [7,8,9]]
*/
console.log(rotateImage(matrix));
