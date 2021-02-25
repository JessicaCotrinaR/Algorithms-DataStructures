/*
[4,4,1], 5 => [2,1]
*/
function twoSumTarget(arr, limit) {
  const complementObj = {};
  for (let i = 0; i < arr.length; i++) {
    // Check1
    let complementIndex = complementObj[limit - arr[i]];
    if (complementIndex !== undefined) {
      return [i, complementIndex];
    } else {
      complementObj[arr[i]] = i;
    }
  }
  return [];
}
console.log(twoSumTarget([1, 5, 9], 6));
