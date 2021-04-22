function candyCrush(board) {
  if (!board) return board;
  let isDone = true;
  //mark rows
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length - 2; c++) {
      let num1 = Math.abs(board[r][c]);
      let num2 = Math.abs(board[r][c + 1]);
      let num3 = Math.abs(board[r][c + 2]);

      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[r][c] = -num1;
        board[r][c + 1] = -num2;
        board[r][c + 2] = -num3;
        isDone = false;
      }
    }
  }
  //mark cols
  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length - 2; r++) {
      let num1 = Math.abs(board[r][c]);
      let num2 = Math.abs(board[r + 1][c]);
      let num3 = Math.abs(board[r + 2][c]);
      if (num1 === num2 && num2 === num3 && num1 !== 0) {
        board[r][c] = -num1;
        board[r + 1][c] = -num2;
        board[r + 2][c] = -num3;
        isDone = false;
      }
    }
  }
  //drop
  if (!isDone) {
    for (let c = 0; c < board[0].length; c++) {
      let idx = board.length - 1;
      for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][c] > 0) {
          board[idx][c] = board[r][c];
          idx--;
        }
      }
      console.log(idx);
      for (let r = idx; r >= 0; r--) {
        console.log("row", r);
        board[r][c] = 0;
      }
    }
  }
  if (isDone) return board;
  else return candyCrush(board);
}
let board = [
  [1, 2, 3, 4],
  [7, 7, 7, 9],
  [7, 4, 8, 7],
  [7, 3, 9, 3],
];
console.log(candyCrush(board));

let a = "a n";
