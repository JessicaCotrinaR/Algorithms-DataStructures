function getNthFib(n) {
  // Write your code here.
  let total = [];
  if (n === 0 && n === 1) return n;
  total.push(getNthFib(n - 1) * (n - 2));
  return total.join();
}
