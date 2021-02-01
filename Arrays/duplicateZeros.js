function dupplicateZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("LOS I", i);
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i = i + 1;
      console.log("i", i);
      arr.pop();
      console.log("Arr", arr);
    }
  }
  console.log(arr);
}
console.log(dupplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
