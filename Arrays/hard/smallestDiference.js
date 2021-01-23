function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  //we sort the array in place, ask interviewer if that ok
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secNum = arrayTwo[idxTwo];
    console.log("1", idxOne);
    console.log("2", idxTwo);
    if (firstNum < secNum) {
      current = secNum - firstNum;
      idxOne++;
    } else if (secNum < firstNum) {
      current = firstNum - secNum;
      idxTwo++;
    } else {
      return [firstNum, secNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secNum];
    }
  }

  return smallestPair;
}
console.log(smallestDifference([-1, 4, 2, 5], [6, 9, 3]));
