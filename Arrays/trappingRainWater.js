function trappingRainWater(height) {
  //first we check if we have height, if don't we return 0
  if (height.length === 0) return 0;
  //create variable to total water
  let totalWater = 0;
  //create a variable to get the max value of the left
  let leftMax = [];
  //get right max
  let rightMax = [];
  //at the end
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i > 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  console.log("ru", rightMax);
  return totalWater;
}
console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3]));
/*

*/
