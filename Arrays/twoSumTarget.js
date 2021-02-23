/*
[4,4,1], 5 => [2,1]
*/
function twoSumTarget(arr, limit) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let substr = limit - val;
    if (obj[substr]) {
      return [i, obj[substr]];
    } else {
      obj[val] = i;
    }
  }
  return [];
}
console.log(twoSumTarget([5, 5, 1], 6));
