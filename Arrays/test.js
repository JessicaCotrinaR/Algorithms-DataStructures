function test(arr1, m, arr2, n) {
  arr2.forEach((item) => {
    arr1[m++] = item;
  });
  return arr1.sort((a, b) => a - b);
}
console.log(test([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(test([1], 1, [], 0));
