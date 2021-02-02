function checkIfExists(arr) {
  if (!arr.length || arr.length === 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * 2) && arr[i] !== 0) return true;
    if (arr[i] === 0 && arr.indexOf(0) !== i) {
      return true;
    }
  }
  return false;
}

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
