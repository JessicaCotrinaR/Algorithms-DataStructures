function productArrayExceptSelf(nums) {
  let R = [];
  let L = [];
  let answer = [];
  //index 0 left not element put 1
  L[0] = 1;
  //left
  for (let i = 1; i < nums.length; i++) {
    L[i] = nums[i - 1] * L[i - 1];
  }
  console.log(L);
  //right
  R[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = nums[i + 1] * R[i + 1];
  }
  console.log(R);
  for (let i = 0; i < nums.length; i++) {
    answer[i] = L[i] * R[i];
  }
  return answer;
}

console.log(productArrayExceptSelf([1, 2, 3, 4]));
