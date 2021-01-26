//finds the smallest nonnegative integer that is NOT in the array.
function getDifferentNumber(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    seen.add(arr[i]);
  }
  console.log(seen);
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(i)) return i;
  }
  return arr.length;
}
// console.log(getDifferentNumber([0, 1, 5, 3]));

console.log(getDifferentNumber([0, 4, 5, 6, 2, 3]));
