function sortedSquaredArr(arr) {
  let answ = new Array(arr.length).fill(0);
  let largeIdx = arr.length - 1;
  let smallIdx = 0;
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    let num1 = arr[smallIdx];
    let num2 = arr[largeIdx];
    if (Math.abs(num1) > Math.abs(num2)) {
      answ[idx] = num1 * num1;
      smallIdx++;
    } else {
      answ[idx] = num2 * num2;
      largeIdx--;
    }
  }
  return answ;
}
let arr = [-9, -6, -1, 2, 4, 12];
console.log(sortedSquaredArr(arr));
/*
[-9, -6, -1, 2, 4, 12]
answ = [0,0,0,0,144]
if (9 > 12)
else 

*/
