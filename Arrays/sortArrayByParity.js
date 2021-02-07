function sortArrayByParity(A) {
  let i = 0,
    j = 0,
    k = A.length - 1;
  const swap = (i, j) => {
    [A[i], A[j]] = [A[j], A[i]];
  };
  while (i <= k) {
    if (A[i] % 2 === 0) {
      swap(i++, j++);
    } else {
      swap(i, k--);
    }
  }
  return A;
}
console.log(sortArrayByParity([5, 6, 1, 2, 3, 4]));
