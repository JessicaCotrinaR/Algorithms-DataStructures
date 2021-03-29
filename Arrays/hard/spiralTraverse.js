//array= [ [1,2,3,4], [12,13,14,15,5], [11,16,15,6], [10,9,8,7]]
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function spiralTraverse(array) {
  // Write your code here.
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  let answer = [];
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      answer.push(array[startRow][i]);
    }
    for (let j = startRow + 1; j <= endRow; j++) {
      answer.push(array[j][endCol]);
    }
    for (let k = endCol - 1; k >= startCol; k--) {
      if (startRow === endRow) break;
      answer.push(array[endRow][k]);
    }
    for (let q = endRow - 1; q > startRow; q--) {
      if (startCol === endCol) break;
      answer.push(array[q][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return answer;
}

let array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

console.log(spiralTraverse(array));
