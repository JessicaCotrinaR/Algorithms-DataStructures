//array= [ [1,2,3,4], [12,13,14,15,5], [11,16,15,6], [10,9,8,7]]
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

function spiralTraverse(array) {
  // Write your code here.
  let newArr = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      newArr.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      newArr.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      //when there os  a single row in the middle of the matri.
      //we don't want to double the matrix
      if (startRow === endRow) break;
      newArr.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      //when there os  a single column in the middle of the matri.
      //we don't want to double the matrix
      if (startCol === endCol) break;
      newArr.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return newArr;
}
