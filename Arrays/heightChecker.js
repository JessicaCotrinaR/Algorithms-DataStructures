var heightChecker = function (heights) {
  let countMoves = 0;
  console.log("eve", [...heights]);
  let sortedArray = [...heights].sort((a, b) => a - b);
  //let sortedArray = heights.sort((a, b) => a - b);
  console.log("sorted", sortedArray);
  console.log("old", heights);
  console.log("new", sortedArray);
  // if the values of the input array and sorted array are not the same, then the value should be moved
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedArray[i]) {
      countMoves++;
    }
  }

  return countMoves;
};

console.log(heightChecker([5, 1, 2, 3, 4]));
