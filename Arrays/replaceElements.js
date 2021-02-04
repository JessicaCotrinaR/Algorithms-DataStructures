/*
arr = [17,18,5,4,6,1]
ouput: [18,6,6,6,1,-1]
*/
function replaceElements(arr) {
  let maxSeen = -Infinity;
  let last = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    maxSeen = Math.max(arr[i], last);
    arr[i] = last;
    //update last with maxSeen
    last = maxSeen;
  }
  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
