/*
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
*/
function getNumberofIsnlands(binaryMatrix) {
  let res = 0;
  //row
  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[0].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        //use dfs
        dfs(i, j, binaryMatrix);
        res++;
      }
    }
  }
  return res;
}

function dfs(i, j, binaryMatrix) {
  let m = binaryMatrix.length;
  let n = binaryMatrix[0].length;
  if (i < 0 || i >= m || j < 0 || j >= n || binaryMatrix[i][j] === 0) {
    return false;
  }
  binaryMatrix[i][j] = 0; //modify value 1 to 0
  dfs(i + 1, j, binaryMatrix); //going dow
  dfs(i, j + 1, binaryMatrix); //right
  dfs(i - 1, j, binaryMatrix); // going up
  dfs(i, j - 1, binaryMatrix); // going left
}

binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];
console.log(getNumberofIsnlands(binaryMatrix));
