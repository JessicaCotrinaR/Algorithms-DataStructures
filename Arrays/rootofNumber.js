function rootOfNumber(x, n) {
  if (x == 0) return 0;
  let left = 0;
  let right = Math.max(1, x);
  let middle = Math.floor(right + left) / 2;

  while (middle - left >= 0.001) {
    if (Math.pow(middle, n) > x) {
      right = middle;
    } else if (Math.pow(middle, n) < x) {
      left = middle;
    } else {
      break;
    }
    middle = (right + left) / 2;
  }
  return middle;
}
/*
input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
*/
console.log(rootOfNumber(7, 3));
