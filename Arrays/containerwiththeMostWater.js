function containerMostWater(heights) {
  let max = -Infinity;
  let i = 0;
  let j = heights.length - 1;
  while (i < j) {
    let min = Math.min(heights[i], heights[j]);
    //uptade the max if we have one
    max = Math.max(max, min * (j - i));
    if (heights[i] < heights[j]) {
      //limiting factor tallest vertical than we can
      i++;
    } else {
      j--;
    }
  }
  return max;
}
