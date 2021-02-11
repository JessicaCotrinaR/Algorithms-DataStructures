function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (!array.length) return 0;
  else if (array.length === 1) return array[0];
  let second = array[0];
  console.log("second", second);
  let first = Math.max(array[0], array[1]);
  console.log("first", first);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    console.log(current);
    second = first;
    first = current;
  }
  return first;
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
