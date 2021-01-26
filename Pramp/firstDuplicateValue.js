function firstDuplicateValue(array) {
  // Write your code here.
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}

//[4,2,3,1,2,5,6,4,4]
//2
