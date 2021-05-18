function pivotIndex(nums) {
  let leftSum = 0,
    rightSum = 0;
  //started traversing from 1 because I want to check in the other iteration if the first
  //elemnt is equaal to leftSum and the leftSum is equal to rightSum
  for (let i = 1; i < nums.length; i++) {
    rightSum += nums[i];
  }
  //27
  for (let i = 0; i < nums.length; i++) {
    let candidate = nums[i]; //3
    if (leftSum === rightSum) return i;
    else {
      leftSum += candidate; //11
      rightSum -= nums[i + 1]; //11
    }
  }
  return -1;
}
//Time = 0(n), Space = 0(1)
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
//                          ------------
//                          right
//                      left
// left === right return i
