//[1,2,3,4] //5
//[1,3,4,5] //2
function shortestNumber(arr) {
  let obj = new Set();
  for (let i = 0; i < arr.length; i++) {
    obj.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!obj.has(i)) {
      return i;
    }
  }
  return arr.length;
}

console.log(shortestNumber([0, 1, 3, 4]));
