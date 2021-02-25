function sentenceReverse(arr) {
  if (arr.length <= 1) return arr;
  if (arr.indexOf(" ") === -1) return arr;
  arr.reverse();
  let L = 0;
  let R = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[R];
    if (R === arr.length - 1) {
      wordSwapper(L, R, arr);
      L = R + 1;
      R = R + 1;
    } else if (char === " ") {
      wordSwapper(L, R - 1, arr);
      L = R + 1;
      R = R + 1;
    } else {
      R++;
    }
  }
  return arr;
}

function wordSwapper(L, R, arr) {
  while (L <= R) {
    [arr[L], arr[R]] = [arr[R], arr[L]];
    L++;
    R--;
  }
}
console.log(
  sentenceReverse(["a", "n", "a", " ", "e", "s", " ", "b", "e", "l", "l", "a"])
);
