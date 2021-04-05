if (!height) return 0;

let totalWater = 0;
let size = height.length;
let leftMax = [];
let rightMax = [];

leftMax[0] = height[0];
rightMax[size - 1] = height[size - 1];

for (let i = 1; i < size; i++) {
  //which one is bigger
  leftMax[i] = Math.max(height[i], leftMax[i - 1]);
}

//get maximm
for (let i = size - 2; i >= 0; i--) {
  rightMax[i] = Math.max(height[i], rightMax[i + 1]);
}
//find minumun of those two values
for (let i = 1; i < size - 1; i++) {
  //starting at index 1 there is nothing to the left
  totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
}

return totalWater;
